# Working drafts

These files are the canonical working prose for new, unpublished pieces. They are checked into Git, outside the Sphinx source directory, and are not included in the website build.

This repository is public: **off the website does not mean private**. Keep private source material and comparisons in the private collection unless approved for this repository.

| Draft | State | Next move |
| --- | --- | --- |
| [Hero Truck](hero-truck.md) | Author review | Supply the ending; review the edit choices in [its notes](_notes/hero-truck.md). |

## Pick up a draft

Read the actual Markdown file and any linked notes. Edit that file directly, using Git history to preserve previous versions. Update the next move here when it changes.

A rough fragment or seed can be checked in the same way. An issue is optional: use it for a task or question and link to the canonical file. Do not maintain a competing copy of the prose in issue comments.

## Keep the prose clean

Put open questions, source provenance, and editorial comparisons in a separate file under `_notes/` when they belong in this public repository. Private originals and comparisons stay in the private collection. Notes are optional; do not create paperwork for its own sake.

## Publish a new piece

1. Move the same Markdown file from `drafts/` into `source/`, preserving its contents. For example: `git mv drafts/hero-truck.md source/hero-truck.md`.
2. Add it to the appropriate `toctree`, check internal links, and run `python scripts/build.py`.
3. Remove its working-draft row here and adjust any links to the moved file.
4. Review and merge the publication PR. The existing Pages workflow publishes the build.

Draft status comes from the file’s location, not a front-matter label. Merely leaving a page out of the navigation does not keep a file under `source/` unpublished.

## Revise a published page

Edit its existing `source/` file on a branch and keep the PR open until ready to publish. Do not create a second canonical prose file under `drafts/`. Merging changes to `source/` publishes them through the existing Pages workflow.
