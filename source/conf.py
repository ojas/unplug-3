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
        "color-brand-primary": "#176b56",
        "color-brand-content": "#176b56",
        "color-background-primary": "#ffffff",
        "color-background-secondary": "#f6f7f5",
        "color-sidebar-background": "#f6f7f5",
    },
    "dark_css_variables": {
        "color-brand-primary": "#87d9b9",
        "color-brand-content": "#87d9b9",
        "color-background-primary": "#171b19",
        "color-background-secondary": "#1e2420",
        "color-sidebar-background": "#1e2420",
    },
}

html_meta = {"description": "unplug-3 — a home for notes, guides, and reference."}
