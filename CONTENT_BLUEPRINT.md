# Content Blueprint (Point 2)

This file gives you production-ready content structure and copy for your modern Vue/Nuxt portfolio.

Use it as your single source when building pages in `app/pages/` and sections in `app/components/shared/`.

---

## Brand Positioning

### One-line intro

I build scalable, high-performance frontend applications with Vue.js and Nuxt.

### Extended pitch

I am a Vue/Nuxt frontend developer focused on turning product ideas into fast, accessible, and maintainable web apps. I care about clean architecture, reusable UI systems, and measurable user impact.

### Hiring promise

- I can ship production-ready features end to end.
- I write maintainable TypeScript code and reusable component patterns.
- I optimize for performance, accessibility, and developer experience.

---

## Home Page Blueprint (`/`)

### Section 1: Hero

**Headline options**

1) Vue.js & Nuxt Frontend Developer
2) I Build Fast, Scalable Vue/Nuxt Products
3) Crafting Modern Web Apps with Vue and Nuxt

**Subheadline**

I design and develop production-grade frontend experiences using Vue.js, Nuxt, TypeScript, and modern UI architecture.

**Primary CTA**

- View Projects

**Secondary CTA**

- Download Resume

### Section 2: Proof Snapshot

Use 3-4 quick metrics:

- X+ Production Features Delivered
- X% Performance Improvement in Key Projects
- X+ Reusable UI Components Built
- X+ Years Building Frontend Products

### Section 3: Featured Projects

Each card should include:

- Project title
- 1-line business value
- Tech stack chips
- Key metric
- Buttons: Live Demo / Case Study / Code

### Section 4: Core Strengths

- Vue 3 Composition API and architecture
- Nuxt SSR/SSG strategy and performance
- Type-safe forms with `vee-validate` + `zod`
- Reusable UI systems with Tailwind + shadcn

### Section 5: Final CTA

Open to frontend roles where clean architecture, product quality, and user experience matter.

Buttons:

- Let’s Talk
- View Resume

---

## About Page Blueprint (`/about`)

### Section 1: Professional Summary

I am a frontend developer specializing in Vue.js and Nuxt, with a focus on building reliable, scalable, and user-centered web applications. I enjoy translating business requirements into clean interfaces and maintainable frontend systems.

### Section 2: How I Work

- I start from user and business outcomes.
- I design component and data-flow boundaries before implementation.
- I implement with strong typing, reusable patterns, and clear naming.
- I validate quality with performance, accessibility, and UX checks.

### Section 3: Technical Stack

- Framework: Vue 3, Nuxt
- Language: TypeScript
- UI: Tailwind CSS, shadcn, Reka UI
- Validation: Zod, vee-validate
- State: Pinia
- Tooling: npm, Git, modern CI workflows

### Section 4: Career Timeline (Template)

- Role name
- Company or freelance context
- Dates
- 3-4 impact bullets (with metrics where possible)

### Section 5: Values

- Build for maintainability, not just speed.
- Prefer clarity over cleverness.
- Optimize for real users and real product outcomes.

---

## Projects Page Blueprint (`/projects`)

### Page Intro

Selected projects that highlight my Vue/Nuxt engineering process, architecture decisions, and measurable outcomes.

### Filter Controls

- By stack (Vue, Nuxt, TypeScript, etc.)
- By type (Dashboard, SaaS, Portfolio, CMS)
- By focus (Performance, UI System, Forms, Data)

### Project Card Copy Formula

- Problem: what needed to be solved
- Build: what you implemented
- Outcome: measurable result

Example:

Built a Nuxt dashboard with typed APIs and reusable table components, reducing repeated UI code by 40% and improving page load performance.

---

## Project Detail Case Study Blueprint (`/projects/[slug]`)

### 1) Context

- What product was this?
- Who were the users?
- What business problem existed?

### 2) Challenge

- Technical constraints
- UX constraints
- Timeline constraints

### 3) Solution

- Architecture approach
- Component strategy
- Data flow strategy

### 4) Technical Deep Dive

- Why Vue/Nuxt patterns selected
- Composables and reusable logic
- Validation and typed models
- Rendering and performance choices

### 5) Results

- Performance metrics
- Productivity metrics
- UX outcomes

### 6) Reflection

- What went well
- What you would improve in v2

---

## Resume Page Blueprint (`/resume`)

### Section Order

1) Name + Role + Contact
2) Summary
3) Core Skills
4) Experience
5) Projects
6) Education/Certifications (if applicable)

### Resume Summary (ready copy)

Frontend developer focused on Vue.js and Nuxt, building scalable, user-centered web applications with strong performance, accessibility, and maintainability standards. Experienced in TypeScript, reusable component systems, and production-ready frontend architecture.

### Skills Groups

- Frontend: Vue 3, Nuxt, TypeScript, JavaScript
- UI: Tailwind CSS, Component systems, Responsive design, Accessibility
- Data/Validation: Pinia, Zod, vee-validate
- Engineering: Git, architecture planning, performance optimization

### Resume CTA

- Download PDF
- Contact Me

---

## Contact Page Microcopy (`/contact`)

### Heading

Let’s build something meaningful.

### Subtext

I am open to Vue/Nuxt frontend roles, freelance work, and collaborative product opportunities.

### Form Labels

- Full Name
- Email
- Company (optional)
- Project or Role Details

### Submit Button

Send Message

### Success Message

Thanks for reaching out. I will get back to you soon.

### Error Message

Something went wrong while sending your message. Please try again.

---

## Blog Strategy Blueprint (`/blog`)

Write 5-8 technical posts that prove depth.

Suggested titles:

- How I Structure Scalable Nuxt Projects
- Vue 3 Composition API Patterns I Use in Production
- Form Architecture with vee-validate and Zod
- Performance Optimization Checklist for Nuxt Apps
- Building Reusable UI Components with Tailwind and CVA

Each post should include:

- problem
- approach
- code examples
- tradeoffs
- practical takeaways

---

## Commented Nuxt Page Scaffold (Easy to Understand)

Use this structure for each page so your code remains readable.

```vue
<script setup lang="ts">
// Page meta controls layout and SEO-friendly route labeling
definePageMeta({
  layout: 'default'
})

// Keep page-level data orchestration here.
// Move reusable logic into composables when repeated.
const pageTitle = 'Projects'
</script>

<template>
  <!-- Keep pages as composition surfaces -->
  <section class="space-y-8">
    <!-- Page heading block -->
    <header>
      <h1 class="text-3xl font-semibold">{{ pageTitle }}</h1>
      <p class="text-muted-foreground">
        Selected work with architecture details and measurable outcomes.
      </p>
    </header>

    <!-- Reusable sections should be extracted into shared components -->
    <SharedProjectsGrid />
  </section>
</template>
```

---

## Writing Guidelines (So Recruiters Understand Fast)

- Prefer clear statements over buzzwords.
- Use measurable outcomes whenever possible.
- Keep paragraphs short and scannable.
- Replace generic claims with evidence.
- Show both product impact and technical quality.

Good:

Built a reusable form system with Vue 3 + Zod, reducing implementation time across new forms.

Weak:

Passionate developer with strong skills and dedication.

---

## Next Build Order (After Blueprint)

1) Implement Home content blocks first.
2) Build Projects list + case study template.
3) Add Resume page and PDF flow.
4) Add About and Contact polish.
5) Publish 3 technical blog posts before sharing portfolio.
