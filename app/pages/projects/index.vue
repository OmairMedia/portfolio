<script setup lang="ts">
definePageMeta({
  name: 'Projects',
  layout: 'default',
})

useSeoMeta({
  title: 'Projects',
  description:
    'Frontend project case studies with architecture decisions, implementation notes, and measurable outcomes.',
})

// Use collection data so case studies are fully content-driven.
const { data: projects } = await useAsyncData('projects-list', () =>
  queryCollection('projects').order('date', 'DESC').all()
)
</script>

<template>
  <div class="space-y-8 pb-10 [animation:fade-in_500ms_ease-out]">
    <PortfolioSectionHeader
      eyebrow="Projects"
      title="Case studies with architecture and outcomes"
      description="Each project highlights problem context, technical decisions, and measurable delivery impact."
    />

    <!-- Grid keeps this page as a composition surface. -->
    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <PortfolioProjectCard
        v-for="project in projects || []"
        :key="project.path"
        :project="project"
      />
    </section>
  </div>
</template>
