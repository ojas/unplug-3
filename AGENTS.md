# Repository guidance

Before making changes, read [WAY.md](WAY.md) for the purpose, editorial posture, voice, evidence standards, and working practices of this site.

For draft work, start with [drafts/README.md](drafts/README.md). New unpublished prose belongs in `drafts/`, outside the published `source/` tree. Edit the canonical file directly; keep editorial notes separate. Revise already published pages on a branch in their existing location. Do not move a draft into `source/` until publication is requested.

Apply that guidance across the repository. Keep WAY.md and this file out of the published site. Explicit instructions from Ojas take precedence; update the guidance when he requests a change in direction.

## Task and handoff rhythm

- Read current `main`, the selected issue/PR, relevant review comments, and actual source before editing. Ojas may work directly on the default branch; preserve his changes and refresh against them before finishing a focused PR. Review semantic overlaps as well as merge conflicts. Do not force-push the default branch.
- Define one outcome and acceptance criteria. A small edit can carry its task brief in its PR; substantial work belongs in an existing issue where available. Update the same draft, task, and PR rather than creating competing copies.
- Keep stable rules here, purpose and accepted editorial decisions in WAY.md, draft-specific next moves in the existing draft index, and task progress/check evidence in issues and PRs.
- At a meaningful milestone or handoff, record accepted decisions, unresolved questions, source links, branch/commit or PR, checks actually run, and the next concrete action. Use these records to resume in a fresh chat; a chat summary is a pointer, not source evidence.
- Label suggestions and interpretations as proposed until accepted. Report drafted, committed, PR-open, merged, and published distinctly. Check current GitHub and deployment state before asserting them.
- Ask before unrequested reorganization, sharing private sources, or scheduling work. Follow already authorized scope without repeatedly requesting permission.

For `source/`, theme, navigation, or build changes, run `python scripts/build.py`, which treats Sphinx warnings as errors. Check links and navigation; inspect layout if presentation changes. Repository-only documentation needs link/diff review; do not claim an application build or live deployment was verified.

Before work requiring personal Notion context or a Notion write, read the [Agent Operating Guide](https://app.notion.com/p/41348c332cfa8192a1bdc9bda816cd35) once per session and use `instructions_version: "0.0.6"` on Notion calls. Keep code and repository documentation in Git.
