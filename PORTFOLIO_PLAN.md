# Vue/Nuxt Portfolio Plan

## Goal

Build a modern, production-grade portfolio web app in Nuxt that serves as both:

- a high-quality personal brand website
- a technical proof-of-skill artifact for Vue/Nuxt hiring

Primary hiring outcome: in under 3 minutes, a company should clearly see product thinking, frontend engineering quality, and implementation depth.

## Success Criteria

- Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+
- Mobile-first and responsive at all key breakpoints
- Strong narrative: clear value proposition + measurable project outcomes
- Recruiter-friendly CTAs on all core pages (contact, resume, project links)
- Demonstrable Vue/Nuxt expertise in architecture, composables, forms, typing, and SEO

## Product Positioning

Messaging to optimize for:

"I build scalable, maintainable, high-performance Vue/Nuxt applications with strong UX and engineering standards."

Audience:

- recruiters (quick fit check)
- engineering managers (quality and architecture check)
- senior frontend peers (implementation depth)

## Information Architecture

Core routes:

- `/` Home
- `/about`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[...slug]`
- `/resume`
- `/contact`

Optional routes:

- `/playground` for mini demos and component experiments

## Content Model

### Project item

- title
- slug
- short summary
- stack
- role
- problem
- implementation highlights
- measurable outcomes (metrics)
- timeline
- live URL
- repo URL
- featured image
- gallery

### Case study sections

- Context
- Challenge
- Approach
- Architecture choices
- Technical implementation
- Performance and accessibility
- Results
- Lessons learned

### Blog post

- title
- slug
- excerpt
- publish date
- tags
- cover image
- reading time
- body

## Technical Architecture (Nuxt 4)

### Existing repo alignment

Current app structure already supports scale:

- `app/pages/`
- `app/components/`
- `app/layouts/`
- `app/lib/`
- `app/types/`
- `app/composables/`
- `app/services/`
- `app/store/`

### Planned architecture usage

- Keep pages thin and delegate to reusable components
- Move reusable logic into composables
- Keep domain types in `app/types/`
- Keep shared utilities in `app/lib/` and `app/utils/`
- Use UI primitives in `app/components/ui/`

### Data strategy

- Use content-driven approach for projects and blog entries
- Prefer static content source for portfolio sections to reduce maintenance
- Add schema validation for structured content where useful

## Design System Direction

Design principles:

- clean, intentional visual hierarchy
- high contrast and accessible typography
- restrained motion (meaningful transitions only)
- consistency in spacing, border radius, and component behavior

Implementation notes:

- use Tailwind utility-first approach
- use design tokens already defined in `app/assets/css/tailwind.css`
- use `cn()` for conditional classes
- use `cva()` for variant-heavy components

## Page-by-Page Build Plan

### 1) Home

- Hero with role-specific value proposition
- Featured projects (top 3)
- Skills snapshot grouped by domain
- Work process section (discovery -> build -> optimize)
- CTA block (resume + contact)

### 2) About

- Professional summary
- Career timeline
- Technical strengths and specialties
- Working principles and collaboration style

### 3) Projects list

- Card grid with filters (stack/category)
- Sorting (newest/impact)
- Fast route transitions and good loading states

### 4) Project detail

- Rich case study template
- Architecture section with diagrams or bullet flow
- Performance and accessibility outcomes
- Links to live and code

### 5) Blog

- Technical writing index with tags
- Post detail optimized for readability
- Suggested related posts

### 6) Resume

- Web resume layout
- Downloadable PDF CTA
- Skills and experience mapped to business impact

### 7) Contact

- Validated form using `vee-validate` + `zod`
- Success/failure feedback states
- Direct links (email, LinkedIn, GitHub)

## Engineering Quality Plan

### Performance

- optimize image loading with Nuxt Image
- lazy-load below-the-fold sections
- use route-level code splitting intentionally
- avoid oversized client-side dependencies

### Accessibility

- semantic landmarks and heading order
- keyboard-accessible controls and focus styles
- color contrast checks
- descriptive labels and aria where needed

### SEO

- unique title/meta per page
- Open Graph and Twitter cards
- sitemap and robots
- schema.org metadata for person/project content

### Reliability

- typed interfaces for domain data
- defensive async error handling
- user-safe error messages
- no sensitive data in logs

## Delivery Roadmap (6 Weeks)

### Week 1: Foundation

- finalize IA and content model
- implement layout shells and global navigation
- define SEO defaults and token consistency

### Week 2: Home + About + Resume

- complete high-priority resume pages
- align copy to hiring outcomes

### Week 3: Projects Platform

- build projects listing and filters
- build project detail case study template

### Week 4: Blog + Contact

- build blog index/details
- implement validated contact flow

### Week 5: Quality Hardening

- performance optimization pass
- accessibility and responsive audit
- consistency and UX polish

### Week 6: Launch Polish

- final copy improvements
- analytics and conversion checks
- deployment verification and final QA

## Proposed File-Level Rollout

- `app/pages/index.vue` -> Home composition
- `app/pages/about/index.vue` -> About page
- `app/pages/projects/index.vue` -> Project listing
- `app/pages/projects/[slug].vue` -> Project detail template
- `app/pages/blogs/index.vue` and `app/pages/blogs/[...slug].vue` -> Blog pages
- `app/pages/contact.vue` -> Contact page
- `app/components/shared/` -> reusable portfolio sections
- `app/types/project.ts` -> stricter project domain model

## Risk Control

- Avoid over-animating or over-designing at expense of clarity
- Keep scope focused on strong core pages before extras
- Prioritize quality and depth over number of sections

## Final Deliverables

- polished portfolio with strong narrative
- project case studies with measurable outcomes
- technical blog foundation
- resume-ready hiring funnel
- maintainable Nuxt codebase demonstrating senior frontend standards
