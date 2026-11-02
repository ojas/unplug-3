# unplug-3

I’ve made a practice of stepping away from an engaging career to examine how I’m living. This is a record of what I questioned, what I tried, what I noticed, and what I’m choosing next.

[Read the site →](https://ojas.github.io/unplug-3/)

## In this repo

- [Published pages](source/) — the story so far.
- [Working drafts](drafts/README.md) — unfinished pieces and their next moves.
- [Artifacts](artifacts/README.md) — source material, including earlier sabbaticals.
- [The way](WAY.md) — purpose and editorial orientation.

Refine the actual Markdown files through PRs. Keep notes separate from the prose. Publish a draft by moving it into `source/` and adding it to the navigation.

## How it works

Sphinx builds MyST Markdown into static HTML. Furo provides the layout, navigation, search, and appearance controls.

GitHub Actions builds `source/` into `dist/` and deploys pushes to `main` to GitHub Pages. Warnings fail the build. Drafts and artifacts stay outside the website build; they remain visible in this public repo.

### Local build

Python 3.12+.

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python scripts/build.py
.venv/bin/python -m http.server 8000 --directory dist
```

The older Read the Docs example under `docs/` is separate from this site.
