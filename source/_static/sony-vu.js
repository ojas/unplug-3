/* SPDX-License-Identifier: AGPL-3.0-or-later */
/* Standalone, dependency-free embed. User data is never evaluated as code. */
(() => {
  'use strict';
  if (customElements.get('sony-vu-meters')) return;
  function validate(data) {
    if (!data || !Array.isArray(data.attributes)) throw new TypeError('Provide an attributes array.');
    const ids = new Set();
    const attributes = data.attributes.map(item => {
      if (!item || typeof item.id !== 'string' || !item.id.trim() || ids.has(item.id)) throw new TypeError('Each attribute needs a unique, nonempty string id.');
      if (typeof item.label !== 'string' || !item.label.trim()) throw new TypeError('Each attribute needs a label.');
      const max = item.max === undefined ? 100 : item.max;
      if (!Number.isFinite(max) || max <= 0 || (item.value !== null && !Number.isFinite(item.value))) throw new TypeError('Values and positive maxima must be finite numbers.');
      ids.add(item.id);
      return { id:item.id, label:item.label, value:item.value === null ? null : Math.max(0, Math.min(max, item.value)), max };
    });
    return { title:typeof data.title === 'string' ? data.title : 'Personal levels', subtitle:typeof data.subtitle === 'string' ? data.subtitle : '', attributes };
  }
  class SonyVUMeters extends HTMLElement {
    static get observedAttributes() { return ['x-data', 'data-src']; }
    constructor() {
      super();
      this.attachShadow({mode:'open'});
      this._data = validate({attributes:[]});
      this._request = 0;
      this.shadowRoot.innerHTML = `<style>
        :host{display:block;color:#b8c5c1;font:14px Arial,Helvetica,sans-serif;--vu-light:#d8ffef;--vu-hot:#fa6755;--vu-glow:#91f9c833;--vu-label:#c8cec8}
        *{box-sizing:border-box}.glass{padding:clamp(22px,4.5vw,54px);border:1px solid #333a38;border-radius:5px;background:linear-gradient(160deg,#1b22211c,transparent 40%),#090e0e;box-shadow:inset 0 1px #ffffff08,0 18px 60px #0003;overflow:hidden}
        header{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:42px}.title{font-size:11px;font-weight:400;text-transform:uppercase;letter-spacing:.18em;margin:0;color:#a7b4af}.subtitle{margin:10px 0 0;color:#74857d;font-size:12px;line-height:1.5}.direction{font-size:9px;letter-spacing:.17em;white-space:nowrap;color:#a9bcae;border:1px solid #425044;padding:6px 8px}.direction span{color:#d9e8ca}
        .row{display:grid;grid-template-columns:minmax(140px,1fr) minmax(180px,1.4fr);align-items:center;gap:clamp(18px,4vw,70px);padding:25px 0;border-top:1px solid #26302d}.label{color:var(--vu-label);font-size:clamp(14px,1.8vw,19px);line-height:1.5;font-weight:400;letter-spacing:.005em}.index{display:block;font-size:9px;letter-spacing:.15em;color:#6a7c72;margin-bottom:7px}.readout{display:grid;grid-template-columns:minmax(0,1fr) 44px;gap:18px;align-items:center}.track{min-width:0}.scale{display:flex;justify-content:space-between;margin-bottom:10px;color:#6e8177;font-size:9px;letter-spacing:.05em;font-variant-numeric:tabular-nums}.scale span:last-child{color:#b47565}.leds{display:grid;grid-template-columns:repeat(28,minmax(0,1fr));gap:3px;height:9px}.led{background:#1c2a24;border-radius:.5px}.led.hot{background:#32221f}.led.on{background:var(--vu-light);box-shadow:0 0 9px var(--vu-glow)}.led.hot.on{background:var(--vu-hot);box-shadow:0 0 9px #fb705433}.value{font:22px 'Courier New',monospace;color:var(--vu-light);text-align:right;text-shadow:0 0 9px var(--vu-glow);font-variant-numeric:tabular-nums}.value small{display:block;font:8px Arial,sans-serif;letter-spacing:.1em;color:#73877c;margin-top:4px;text-shadow:none}.bottom{display:flex;justify-content:space-between;gap:15px;border-top:1px solid #34443b;padding-top:20px;margin-top:8px;font-size:8px;letter-spacing:.17em;color:#72877a}.bottom strong{font-weight:400;color:#b5c8b6}.error{margin:0;color:#f7a394;font-size:13px;line-height:1.5}
        @media(max-width:520px){.glass{padding:24px 18px}header{margin-bottom:24px}.row{grid-template-columns:minmax(110px,.9fr) minmax(135px,1fr);gap:15px;padding:23px 0}.label{font-size:13px}.readout{gap:8px;grid-template-columns:minmax(0,1fr) 30px}.leds{gap:2px;height:8px}.value{font-size:17px}.direction{font-size:7px;padding:5px}.scale{font-size:7px}.subtitle{font-size:10px}.bottom{font-size:7px;letter-spacing:.07em}}
        @media(max-width:320px){.row{grid-template-columns:1fr}.readout{grid-template-columns:minmax(0,1fr) 40px}}
        @media(prefers-reduced-motion:no-preference){.led{transition:background-color 70ms linear,box-shadow 70ms linear}}
      </style><section class="glass"><header><div><h2 class="title"></h2><p class="subtitle"></p></div><div class="direction"><span>◁</span> AUTO REVERSE <span>▷</span></div></header><div class="rows"></div><p class="error" role="status" hidden></p><div class="bottom"><span>ATTRIBUTE LEVEL <strong>INDICATOR</strong></span><span>DATA INPUT · <strong>LED METER</strong></span></div></section>`;
      this._render();
    }
    connectedCallback() { this._readAttributes(); }
    disconnectedCallback() { this._request++; this._abort?.abort(); }
    attributeChangedCallback() { if (this.isConnected) this._readAttributes(); }
    get data() { return structuredClone(this._data); }
    set data(value) {
      const next = validate(value);
      this._request++; this._abort?.abort();
      this._data = next; this._render();
      this.dispatchEvent(new CustomEvent('vu-change',{detail:this.data,bubbles:true,composed:true}));
    }
    update(data) { this.data = data; return this; }
    setValue(id, value) {
      if (!this._data.attributes.some(item => item.id === id)) throw new RangeError(`Unknown attribute: ${id}`);
      this.data = {...this.data, attributes:this._data.attributes.map(item => item.id === id ? {...item,value} : item)};
      return this;
    }
    async load(url) {
      const request = ++this._request;
      this._abort?.abort(); this._abort = new AbortController();
      try {
        const response = await fetch(url,{signal:this._abort.signal});
        if (!response.ok) throw new Error(`JSON request failed (${response.status}).`);
        const next = validate(await response.json());
        if (request === this._request) { this._data = next; this._render(); this.dispatchEvent(new CustomEvent('vu-change',{detail:this.data,bubbles:true,composed:true})); }
        return this;
      } catch (error) { if (error.name !== 'AbortError' && request === this._request) this._error(error); throw error; }
    }
    _readAttributes() {
      try {
        // Inline JSON takes precedence when both inputs are present.
        if (this.hasAttribute('x-data')) this.data = JSON.parse(this.getAttribute('x-data'));
        else if (this.hasAttribute('data-src')) this.load(this.getAttribute('data-src')).catch(() => {});
      } catch(error) { this._request++; this._abort?.abort(); this._error(error); }
    }
    _error(error) { const el=this.shadowRoot.querySelector('.error'); el.textContent=error.message; el.hidden=false; this.dispatchEvent(new CustomEvent('vu-error',{detail:{message:error.message},bubbles:true,composed:true})); }
    _render() {
      const root=this.shadowRoot;
      root.querySelector('.title').textContent=this._data.title;
      const subtitle=root.querySelector('.subtitle'); subtitle.textContent=this._data.subtitle; subtitle.hidden=!this._data.subtitle;
      root.querySelector('.error').hidden=true;
      const rows=root.querySelector('.rows'); rows.replaceChildren();
      this._data.attributes.forEach((item,index) => {
        const row=document.createElement('div'); row.className='row';
        const label=document.createElement('div'); label.className='label';
        const number=document.createElement('span'); number.className='index'; number.textContent=`${String(index+1).padStart(2,'0')} / PERSONAL ATTRIBUTE`;
        label.append(number,document.createTextNode(item.label));
        const readout=document.createElement('div'); readout.className='readout';
        const track=document.createElement('div'); track.className='track'; track.setAttribute('role',item.value === null ? 'img' : 'meter'); track.setAttribute('aria-label',item.label); if (item.value !== null) track.setAttribute('aria-valuemin','0'); if (item.value !== null) track.setAttribute('aria-valuemax',String(item.max)); if (item.value !== null) track.setAttribute('aria-valuenow',String(item.value)); else track.setAttribute('aria-label',`${item.label}: not yet scored`);
        const scale=document.createElement('div'); scale.className='scale'; scale.setAttribute('aria-hidden','true');
        for(const fraction of [0,.25,.5,.75,1]) { const mark=document.createElement('span'); mark.textContent=String(Math.round(item.max*fraction)); scale.append(mark); }
        const leds=document.createElement('div'); leds.className='leds'; leds.setAttribute('aria-hidden','true');
        const count=item.value===null || item.value===0?0:Math.max(1,Math.round(item.value/item.max*28));
        for(let n=0;n<28;n++){ const led=document.createElement('span'); led.className=`led${n>=23?' hot':''}${n<count?' on':''}`; leds.append(led); }
        track.append(scale,leds);
        const value=document.createElement('div'); value.className='value'; value.setAttribute('aria-hidden','true'); value.textContent=item.value === null ? '—' : String(Math.round(item.value*10)/10); const unit=document.createElement('small'); unit.textContent=item.value === null ? 'UNSCORED' : `/ ${item.max}`; value.append(unit);
        readout.append(track,value); row.append(label,readout); rows.append(row);
      });
    }
  }
  customElements.define('sony-vu-meters',SonyVUMeters);
  const resolve = target => { const el=typeof target==='string'?document.querySelector(target):target; if(!(el instanceof SonyVUMeters)) throw new TypeError('Target must be a sony-vu-meters element.'); return el; };
  window.SonyMeters=Object.freeze({version:'1.0.0',validate,mount(target,data){const el=resolve(target);el.data=data;return el;},load(target,url){return resolve(target).load(url);}});
})();
