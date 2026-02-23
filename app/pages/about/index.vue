<script setup lang="ts">
import { profileInfo, skillGroups, timeline } from '@/lib/portfolio-data'

definePageMeta({
  name: 'About',
  layout: 'default',
})

useSeoMeta({
  title: 'About',
  description:
    'Learn about my frontend engineering approach, Vue/Nuxt strengths, and the principles I use to build maintainable products.',
})
</script>

<template>
  <div class="space-y-10 pb-10 [animation:fade-in_500ms_ease-out]">
    <PortfolioSectionHeader
      eyebrow="About"
      :title="`${profileInfo.fullName} - ${profileInfo.role}`"
      :description="profileInfo.summary"
    />

    <section class="rounded-xl border bg-card p-6">
      <h3 class="text-lg font-semibold">How I work</h3>
      <ul class="mt-4 space-y-2 text-sm text-muted-foreground">
        <li>Start from product and user outcomes before implementation details.</li>
        <li>Define component boundaries and data flow before building large features.</li>
        <li>Use typed contracts and reusable patterns to reduce regressions.</li>
        <li>Ship with performance, accessibility, and readability in mind.</li>
      </ul>
    </section>

    <section class="space-y-4">
      <h3 class="text-xl font-semibold">Technical strengths</h3>
      <div class="grid gap-4 md:grid-cols-3">
        <article v-for="group in skillGroups" :key="group.title" class="rounded-xl border bg-card p-5">
          <h4 class="font-semibold">{{ group.title }}</h4>
          <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="space-y-4">
      <h3 class="text-xl font-semibold">Experience timeline</h3>
      <article v-for="item in timeline" :key="item.period" class="rounded-xl border bg-card p-5">
        <p class="text-sm font-medium text-muted-foreground">{{ item.period }}</p>
        <h4 class="mt-1 font-semibold">{{ item.role }}</h4>
        <p class="text-sm text-muted-foreground">{{ item.context }}</p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </article>
    </section>
  </div>
</template>
