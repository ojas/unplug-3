# Writing pages

Pages are ordinary Markdown files. MyST adds the structured features that Sphinx uses for navigation, callouts, and cross-references.

## Create a page

Add a file such as `source/first-note.md`:

```markdown
# First note

One useful idea, explained clearly.

## Details

Add context, examples, and links as needed.
```

Use one top-level heading for the page title. Use second- and third-level headings to organize the rest.

## Put it in the navigation

Add the filename, without its extension, to the `toctree` in `source/index.md`:

````markdown
```{toctree}
:hidden:
:caption: Explore

start-here
writing-pages
examples
first-note
```
````

The order of the entries determines the order in the sidebar and the previous/next links.

## Link between pages

Use a relative Markdown link:

```markdown
See the [examples](examples.md).
```

For a specific section, add a heading anchor:

```markdown
See the [callout example](examples.md#callouts).
```

## Build and publish

Run `python3 scripts/build.py` from the project folder. Sphinx generates the site and its search index in `dist/`.

Check the result, then publish the new build. Changes to Markdown appear on the hosted site after a rebuild and deployment.
