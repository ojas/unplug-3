"""Sphinx configuration for unplug-3."""

project = "unplug-3"
author = "Ojas Patel"
copyright = "2026, Ojas Patel"
language = "en"
extensions = ["myst_parser"]
source_suffix = {".md": "markdown", ".rst": "restructuredtext"}
root_doc = "index"
exclude_patterns = []
myst_enable_extensions = ["colon_fence"]
myst_heading_anchors = 3

html_theme = "furo"
html_title = "unplug-3"
html_short_title = "unplug-3"
html_static_path = ["_static"]
html_css_files = ["custom.css"]
html_favicon = "_static/favicon.svg"
html_show_sourcelink = True
html_show_sphinx = True
html_copy_source = True
html_use_index = False
html_theme_options = {
    "navigation_with_keys": True,
    "light_css_variables": {
        "color-brand-primary": "#1a1a1a",
        "color-brand-content": "#1a1a1a",
        "color-foreground-primary": "#1a1a1a",
        "color-foreground-secondary": "#625e57",
        "color-background-primary": "#f6f4ef",
        "color-background-secondary": "#eeebe4",
        "color-sidebar-background": "#eeebe4",
    },
    "dark_css_variables": {
        "color-brand-primary": "#e8e2d8",
        "color-brand-content": "#e8e2d8",
        "color-background-primary": "#191816",
        "color-background-secondary": "#24211e",
        "color-sidebar-background": "#24211e",
    },
}

html_meta = {"description": "unplug-3 — field notes from Ojas Patel's sabbatical."}
