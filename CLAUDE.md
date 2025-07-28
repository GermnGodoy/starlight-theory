# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev` - Runs Astro dev server
- **Build**: `npm run build` - Builds the Astro project for production
- **Preview**: `npm run preview` - Preview the production build locally

## Architecture Overview

This is **Starlight Theory**, an educational physics and mathematics blog by German Godoy. Built with Astro for optimal performance, it features a clean, responsive design focused on making advanced scientific concepts accessible through intuitive explanations.

### Key Features

**Static Site Generation**: Uses Astro's static site generation for optimal performance
**Content Collections**: Blog posts are managed through Astro's content collections system
**MDX Support**: Articles are written in MDX with support for custom components
**Tailwind CSS**: Styling with Tailwind CSS and Radix UI colors for consistent design
**Responsive Design**: Mobile-first design with sticky sidebar layout

### Project Structure

```
src/
├── content/
│   ├── blog/           # MDX blog posts
│   └── config.ts       # Content collection schemas
├── components/
│   ├── BackgroundStripes.astro  # Background pattern component
│   └── SubscribeButton.astro    # Email subscription component
├── layouts/
│   └── Layout.astro    # Main page layout
├── pages/
│   ├── index.astro     # Homepage with post listings
│   └── [...slug].astro # Dynamic routes for blog posts
└── styles/
    └── global.css      # Global styles and font definitions
```

### Content Management

Blog posts are stored in `src/content/blog/` as MDX files with frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
editedAt: "2023-01-01"
image: "/images/post-image.png"
---
```

### Styling System

- **Fonts**: Custom fonts (PP Editorial New, Intel One Mono, Custom Sans) loaded via CSS
- **Colors**: Radix UI color system for consistent theming
- **Layout**: CSS Grid for the main layout with sticky sidebar
- **Typography**: Custom prose styles for article content

### Content Focus

**Physics Topics**: Quantum mechanics, relativity, thermodynamics, electromagnetism
**Mathematics**: Complex analysis, Fourier transforms, calculus of variations, differential equations
**Approach**: Graduate and undergraduate level concepts explained with intuitive clarity
**Author**: German Godoy - focus on making advanced concepts accessible

### Key Differences from Original Template

1. **Physics/Math Focus**: All content now covers advanced physics and mathematics
2. **Scientific Rigor**: Content maintains mathematical accuracy while prioritizing intuitive understanding
3. **Academic Level**: Targets undergraduate and graduate students
4. **Static Generation**: Optimized for fast loading and accessibility

### Adding New Content

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter with required fields (title, description, editedAt, image)
3. Write content using MDX syntax with focus on:
   - Mathematical accuracy
   - Intuitive explanations
   - Real-world applications
   - Progressive complexity
4. Images should be placed in `public/images/`
5. The post will automatically appear on the homepage

### Content Guidelines

- **Target Audience**: Undergraduate and graduate students in physics/mathematics
- **Tone**: Accessible but rigorous, avoiding oversimplification
- **Structure**: Start with intuition, build to mathematical formalism
- **Examples**: Include practical applications and real-world connections
- **Equations**: Use LaTeX-style math notation when needed

### Custom Components

Basic MDX components are available for enhanced content:
- Standard HTML elements with custom styling
- Code blocks with syntax highlighting
- Images and figures
- Typography components

For more complex interactive components, consider client-side hydration with Astro's `client:*` directives.

### Performance

**Starlight Theory** prioritizes both performance and educational value:
- Static site generation for fast loading
- Minimal JavaScript for accessibility
- Clean typography optimized for reading scientific content
- Responsive design that works on all devices
- Focus on making complex concepts understandable

The result is a fast, accessible physics and mathematics blog that makes advanced scientific concepts approachable for students and enthusiasts.