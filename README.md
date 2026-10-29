# unplug-3

A real Sphinx site with MyST Markdown, the Furo theme, browser search, and light/dark modes. Editable content lives in `source/`; generated HTML lives in `dist/`.

## Build locally

Requires Python 3.12 or later.

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 scripts/build.py
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. On Windows, activate with `.venv\Scripts\activate`.

`make html` and `npm run build` invoke the same Python build script. Node is only a wrapper used by the Sites build helper; Sphinx itself runs in Python.

## Edit content

- `source/index.md`: homepage and navigation.
- `source/start-here.md`: introduction to the starter.
- `source/writing-pages.md`: authoring guide.
- `source/examples.md`: working formatting examples.
- `source/conf.py`: Sphinx configuration.
- `source/_static/custom.css`: visual adjustments.

Add a Markdown page, list it in the homepage's `toctree`, then rebuild. The build treats warnings as errors so missing pages and broken internal references are caught before publishing.

## Existing Read the Docs template

The repository also retains its original Read the Docs tutorial in `docs/source/`, with its configuration in `.readthedocs.yaml` and example Python package in `lumache.py`. That template is independent of the hosted site's Markdown in `source/`. Its existing files and build configuration are preserved by this import.

## Hosting

`.openai/hosting.json` preserves this Site's identity and declares `dist` as its static output. Publish the output produced from the exact committed source. No Python server is needed after deployment.

The Site starts private. A custom domain can be attached later.
