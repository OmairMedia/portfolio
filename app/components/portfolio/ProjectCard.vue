<script setup lang="ts">
interface ProjectCardData {
  title: string
  summary: string
  stack?: string[]
  outcomes?: string[]
  path?: string
  repoUrl?: string
}

interface Props {
  project: ProjectCardData
}

defineProps<Props>()
</script>

<template>
  <article class="rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div class="space-y-3">
      <h3 class="text-lg font-semibold">
        {{ project.title }}
      </h3>
      <p class="text-sm text-muted-foreground">
        {{ project.summary }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(item,index) in project.stack || []"
          :key="index"
          class="rounded-full border px-2 py-1 text-xs text-muted-foreground"
        >
          {{ item }}
        </span>
      </div>
      <p class="text-sm font-medium">
        {{ project.outcomes?.[0] || 'View full case study for implementation details.' }}
      </p>
    </div>

    <div class="mt-5 flex items-center gap-3">
      <NuxtLink :to="project.path || '/projects'" class="text-sm font-medium underline underline-offset-4">
        Case Study
      </NuxtLink>
      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        target="_blank"
        rel="noreferrer"
        class="text-sm text-muted-foreground underline underline-offset-4"
      >
        Code
      </a>
    </div>
  </article>
</template>
