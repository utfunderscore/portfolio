# Markdown Projects Feature

This portfolio now supports markdown-based project pages with the following features:

## How to Add New Projects

1. Create a new `.md` file in `src/data/projects/` directory
2. Use the following frontmatter structure at the top of your markdown file:

```markdown
---
title: "Your Project Title"
tags: ["Technology1", "Technology2", "Framework"]
description: "A brief description of your project that appears on the main page"
---

# Your Project Title

Your detailed project content goes here...
```

## File Structure

```
src/
├── data/
│   └── projects/
│       ├── project-name.md (your markdown files)
│       └── ...
├── app/
│   ├── components/
│   │   └── ProjectPage.tsx (renders individual project pages)
│   ├── projects/
│   │   └── [slug]/
│   │       ├── page.tsx (dynamic route handler)
│   │       └── not-found.tsx (404 page)
│   ├── ProjectCard.tsx (updated to link to dynamic pages)
│   └── page.tsx (main page, updated to load from markdown)
└── utils/
    └── projects.ts (utility functions for loading projects)
```

## Features

- **Individual Project Pages**: Each markdown file gets its own URL at `/projects/[filename]`
- **Rich Markdown Support**: Full markdown syntax including GitHub-flavored markdown
- **Frontmatter Support**: Title, tags, and description in YAML frontmatter
- **Responsive Design**: Mobile-friendly layout with consistent styling
- **Back Navigation**: Easy navigation back to the main portfolio
- **SEO Optimized**: Proper meta tags and static generation
- **Typography Styling**: Beautiful typography for markdown content

## Example Project Files

Four example projects have been created:
- `e-commerce-platform.md`
- `task-management-app.md` 
- `weather-dashboard.md`
- `blog-cms.md`

## Navigation

- Main portfolio page shows project cards with descriptions and tags
- Clicking any project card navigates to the full project page
- Project pages include a back button to return to the main portfolio
- URLs are SEO-friendly using the markdown filename as the slug

## Technologies Used

- **react-markdown**: For rendering markdown content
- **gray-matter**: For parsing frontmatter
- **remark-gfm**: For GitHub-flavored markdown support
- **@tailwindcss/typography**: For beautiful typography styling
- **Next.js App Router**: For dynamic routing and static generation