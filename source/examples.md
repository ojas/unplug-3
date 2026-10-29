# Examples

A few useful building blocks for your pages. These examples are rendered from Markdown.

## Text and lists

Write **bold text**, *emphasis*, and `inline code`. Link to another page, such as [Start here](start-here.md).

- Keep one idea together.
- Use headings to make longer pages easy to scan.
- Add a concrete example when it helps.

## Code

Fenced code blocks include syntax highlighting:

```python
from pathlib import Path

for note in sorted(Path("source").glob("*.md")):
    print(note.name)
```

## Tables

| Content | Good for |
| --- | --- |
| Note | Capturing a useful idea |
| Guide | Explaining how to do something |
| Reference | Keeping facts easy to find |

## Callouts

```{note}
A callout brings a useful aside into view without interrupting the main explanation.
```

```{tip}
Keep the site simple at first. A few well-connected pages make a useful beginning.
```

## Quotations

> A short quotation or excerpt can sit naturally alongside the surrounding text.

## A small checklist

1. Write a page.
2. Add it to the navigation.
3. Build, review, and publish.
