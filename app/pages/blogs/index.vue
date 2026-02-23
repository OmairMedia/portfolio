<script setup lang="ts">
definePageMeta({
  name: 'Blogs',
  layout: 'default',
})

useSeoMeta({
  title: 'Blog',
  description: 'Technical notes on Vue.js, Nuxt, architecture, forms, and performance engineering.',
})

const { data: posts } = await useAsyncData('blogs-list', () =>
  queryCollection('blogs').order('date', 'DESC').all()
)
</script>

<template>
  <div class="space-y-8 pb-10 [animation:fade-in_500ms_ease-out]">
    <PortfolioSectionHeader
      eyebrow="Blog"
      title="Technical writing for Vue and Nuxt"
      description="Short practical posts that demonstrate architecture decisions, implementation details, and frontend tradeoffs."
    />

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="post in posts || []" :key="post.path" class="rounded-xl border bg-card p-5">
        <p class="text-xs font-medium text-muted-foreground">{{ post.date }}</p>
        <h3 class="mt-2 text-lg font-semibold">{{ post.title }}</h3>
        <p class="mt-2 text-sm text-muted-foreground">{{ post.description }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="tag in post.tags" :key="tag" class="rounded-full border px-2 py-1 text-xs">
            {{ tag }}
          </span>
        </div>
        <NuxtLink :to="post.path" class="mt-4 inline-block text-sm underline underline-offset-4">
          Read Post
        </NuxtLink>
      </article>
    </section>
  </div>
</template>
