# Reading and listening lists — working notes

Canonical lists:

- [Reading list](../reading-list.md).
- [Podcast snips & other listening](../podcast-snips.md).

## Next move

Obtain the raw exports from Ojas, inspect their fields, and import a small batch for review before importing the remainder. No source records have been imported yet. Do not populate the lists from memory or infer which items Ojas finished.

Keep the original exports unchanged in the private collection. Only material selected for this public repository belongs in these files.

## Keep capture easy

A recognizable title and an available source link are enough to start an entry. Add authors, dates, status, timestamps, and notes only when supplied or verified. The formats below are examples, not required forms to fill out.

Use Markdown as the canonical curated content. Do not maintain another edited copy of the same list in JSON, an issue, or a second page.

## Reading entry

```markdown
## [Title](source-url)

Author or creator · Book / essay / paper / other · Status, if known

My note: Why I kept this, what caught my attention, or a question to return to.
```

- Suggested statuses, when useful: to read, reading, read, reference.
- Omit unknown status rather than equating a bookmark, highlight, or imported record with a completed read.
- Distinguish a quotation from a paraphrase and from Ojas’s own note.
- Keep capture date, publication date, and reading date separate when the source supplies them.

## Podcast snip or listening entry

```markdown
## Episode or recording title

Podcast / series · Speaker, if known

[Episode or recording](episode-url) · [Snip](snip-url) · Timestamp, if available

Captured passage:
> Brief source quotation, only when exact words are available.

My note: What I noticed or want to explore.
```

- Prefer a snip URL or a timestamp/range that leads back to the passage; keep the episode link as well when available.
- Retain separate snips from the same episode. They may capture different ideas.
- Label an export’s summary as a summary, including AI-generated summaries when known. Never turn it into a verbatim quotation.
- Missing transcript or timestamp is acceptable; do not invent either.

## Preserve fidelity during import

1. Inspect the export before choosing a mapping. Preserve original IDs, source URLs, timestamps, and authorship/provenance when available; keep record locators in these notes if they would clutter the readable list.
2. Deduplicate using stable source IDs or matching canonical URLs. Distinct snips from one episode remain distinct.
3. Preserve raw source text in the original export and record consequential editorial changes. Unclear attribution or transcription becomes an open question.
4. Keep imported source passages, source/AI summaries, and Ojas’s notes distinguishable.
5. Review a sample for accuracy and readability, then import the rest using the same mapping. Record counts, omissions, duplicates, and unresolved fields.
6. Refine the canonical lists through commits or PRs. Publication follows the normal draft-to-source move, with relative links checked at that point.

## Import log

No imports yet. Record the source export name/date, mapping decisions, record counts, and review status here when data arrives. Do not commit raw private exports merely to fill this log.
