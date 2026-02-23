<script setup lang="ts">
const route = useRoute()

// Catch-all slug is normalized here so both "a/b" and ["a", "b"] work.
const slug = computed(() => {
  const rawValue = route.params.slug

  if (Array.isArray(rawValue)) {
    return rawValue.join('/')
  }

  return String(rawValue || '')
})

const postPath = computed(() => `/blogs/${slug.value}`)

const { data: post } = await useAsyncData(
  () => `blog-${slug.value}`,
  () => queryCollection('blogs').path(postPath.value).first(),
  { watch: [postPath] }
)

useSeoMeta({
  title: () => (post.value ? post.value.title : 'Blog Post'),
  description: () => post.value?.description || 'Technical writing on Vue and Nuxt engineering.',
})
</script>

<template>
  <article v-if="post" class="space-y-5 pb-10 [animation:fade-in_500ms_ease-out]">
    <p class="text-sm text-muted-foreground">{{ post.date }}</p>
    <h1 class="text-3xl font-semibold md:text-4xl">{{ post.title }}</h1>
    <p class="text-base text-muted-foreground">{{ post.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="tag in post.tags" :key="tag" class="rounded-full border px-2 py-1 text-xs">
        {{ tag }}
      </span>
    </div>

    <section class="rounded-xl border bg-card p-6">
      <!-- Render markdown body from Nuxt Content -->
      <ContentRenderer :value="post" class="prose prose-sm max-w-none dark:prose-invert" />
    </section>
  </article>

  <section v-else class="rounded-xl border bg-card p-6">
    <h1 class="text-xl font-semibold">Post Not Found</h1>
    <p class="mt-2 text-sm text-muted-foreground">
      The blog post you requested does not exist.
    </p>
    <NuxtLink to="/blogs" class="mt-3 inline-block text-sm underline underline-offset-4">
      Back to Blog
    </NuxtLink>
  </section>
</template>
