<script setup lang="ts">
definePageMeta({
  name: 'Project Case Study',
  layout: 'default',
})

const route = useRoute()

// Resolve project path from dynamic route segment.
const slug = computed(() => String(route.params.slug || ''))
const projectPath = computed(() => `/projects/${slug.value}`)

const { data: project } = await useAsyncData(
  () => `project-${slug.value}`,
  () => queryCollection('projects').path(projectPath.value).first(),
  { watch: [projectPath] }
)

useSeoMeta({
  title: () => (project.value ? `${project.value.title} Case Study` : 'Project Case Study'),
  description: () =>
    project.value?.summary ||
    'Detailed case study covering implementation approach, technical highlights, and outcomes.',
})
</script>

<template>
  <div v-if="project" class="space-y-8 pb-10 [animation:fade-in_500ms_ease-out]">
    <PortfolioSectionHeader
      eyebrow="Case Study"
      :title="project.title"
      :description="project.summary"
    />

    <section class="rounded-xl border bg-card p-6">
      <h3 class="font-semibold">Problem</h3>
      <p class="mt-2 text-sm text-muted-foreground">{{ project.problem }}</p>
    </section>

    <section class="rounded-xl border bg-card p-6">
      <h3 class="font-semibold">Approach</h3>
      <p class="mt-2 text-sm text-muted-foreground">{{ project.approach }}</p>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <article class="rounded-xl border bg-card p-6">
        <h3 class="font-semibold">Technical highlights</h3>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li v-for="item in project.highlights" :key="item">{{ item }}</li>
        </ul>
      </article>
      <article class="rounded-xl border bg-card p-6">
        <h3 class="font-semibold">Outcomes</h3>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li v-for="item in project.outcomes" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>
  </div>

  <section v-else class="rounded-xl border bg-card p-6">
    <h2 class="text-xl font-semibold">Project not found</h2>
    <p class="mt-2 text-sm text-muted-foreground">
      The requested case study does not exist. You can return to the projects listing.
    </p>
    <NuxtLink to="/projects" class="mt-4 inline-block text-sm underline underline-offset-4">
      Back to Projects
    </NuxtLink>
  </section>
</template>
