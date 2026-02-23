<script setup lang="ts">
import { cn } from '@/lib/utils'

// Keep navigation data in one place to simplify future updates.
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blog' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b bg-background/90 backdrop-blur">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <NuxtLink to="/" class="text-sm font-semibold tracking-wide md:text-base">
          Omair Portfolio
        </NuxtLink>
        <nav class="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-5">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="cn(
              'transition hover:text-foreground',
              route.path === link.to ? 'font-medium text-foreground' : 'text-muted-foreground'
            )"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      <slot />
    </main>

    <footer class="border-t">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
        <p>Built with Vue 3, Nuxt, and TypeScript.</p>
        <p>Open to frontend opportunities and product collaborations.</p>
      </div>
    </footer>
  </div>
</template>
