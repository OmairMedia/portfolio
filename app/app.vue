<script setup lang="ts">
const siteName = 'Omair Portfolio'
const defaultDescription =
  'Vue and Nuxt frontend developer portfolio featuring case studies, technical writing, and production-grade implementation patterns.'

// Global head defaults keep metadata consistent across all pages.
useHead({
  titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk} | ${siteName}` : siteName),
})

useSeoMeta({
  description: defaultDescription,
  ogType: 'website',
  ogSiteName: siteName,
  ogDescription: defaultDescription,
  ogImage: '/dp.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: siteName,
  twitterDescription: defaultDescription,
  twitterImage: '/dp.webp',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
