<script setup lang="ts">
import { portfolioMetrics, profileInfo, skillGroups } from '@/lib/portfolio-data'

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Vue and Nuxt Frontend Developer',
  description:
    'Modern frontend portfolio showcasing Vue.js and Nuxt expertise through production-style case studies and technical writing.',
})

// Featured projects come from Nuxt Content so updating markdown updates homepage cards.
const { data: projects } = await useAsyncData('home-featured-projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)

const featuredProjects = computed(() => (projects.value || []).slice(0, 3))
</script>

<template>
  <div class="space-y-14 pb-10 [animation:fade-in_500ms_ease-out]">
    <!-- Hero: quick recruiter-facing value proposition -->
    <section class="rounded-2xl border bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,.10),transparent_40%)] p-6 md:p-10">
      <div class="max-w-3xl space-y-4">
        <p class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {{ profileInfo.role }}
        </p>
        <h1 class="text-3xl font-semibold leading-tight md:text-5xl">
          {{ profileInfo.fullName }}
        </h1>
        <p class="text-base text-muted-foreground md:text-lg">
          {{ profileInfo.summary }}
        </p>
        <div class="flex flex-wrap gap-3 pt-2">
          <NuxtLink
            to="/projects"
            class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            View Projects
          </NuxtLink>
          <NuxtLink to="/resume" class="rounded-md border px-4 py-2 text-sm font-medium">
            View Resume
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <article
        v-for="metric in portfolioMetrics"
        :key="metric.label"
        class="rounded-xl border bg-card p-5"
      >
        <p class="text-2xl font-semibold">{{ metric.value }}</p>
        <p class="mt-1 font-medium">{{ metric.label }}</p>
        <p class="mt-2 text-sm text-muted-foreground">{{ metric.detail }}</p>
      </article>
    </section>

    <section class="space-y-6">
      <PortfolioSectionHeader
        eyebrow="Featured Work"
        title="Selected projects and outcomes"
        description="A quick snapshot of the projects that best represent architecture quality and product impact."
      />
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <PortfolioProjectCard
          v-for="project in featuredProjects"
          :key="project.path"
          :project="project"
        />
      </div>
    </section>

    <section class="space-y-6">
      <PortfolioSectionHeader
        eyebrow="Strengths"
        title="Core frontend capabilities"
        description="Built around practical Vue/Nuxt delivery, typed workflows, and scalable UI systems."
      />
      <div class="grid gap-4 md:grid-cols-3">
        <article v-for="group in skillGroups" :key="group.title" class="rounded-xl border bg-card p-5">
          <h3 class="font-semibold">{{ group.title }}</h3>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
