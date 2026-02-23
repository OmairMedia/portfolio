<script setup lang="ts">
import {
  education,
  languages,
  marketProfiles,
  profileInfo,
  skillGroups,
  timeline,
} from '@/lib/portfolio-data'

definePageMeta({
  name: 'Resume',
  layout: 'default',
})

useSeoMeta({
  title: 'Resume',
  description:
    'Frontend resume highlighting Vue.js and Nuxt strengths, implementation quality, and project impact.',
})

const { data: projects } = await useAsyncData('resume-projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)

const topProjects = computed(() => (projects.value || []).slice(0, 2))
</script>

<template>
  <div class="space-y-8 pb-10 [animation:fade-in_500ms_ease-out]">
    <PortfolioSectionHeader
      eyebrow="Resume"
      :title="`${profileInfo.fullName} - ${profileInfo.role}`"
      :description="profileInfo.summary"
    />

    <section class="flex flex-wrap items-center gap-3">
      <a
        href="/M_Omair_Sohail_Resume.pdf"
        download
        class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        Download Resume PDF
      </a>
      <NuxtLink to="/contact" class="rounded-md border px-4 py-2 text-sm font-medium">
        Contact Me
      </NuxtLink>
    </section>

    <section class="grid gap-4 rounded-xl border bg-card p-6 md:grid-cols-2">
      <div>
        <h3 class="text-lg font-semibold">Contact</h3>
        <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
          <li><span class="font-medium text-foreground">Location:</span> {{ profileInfo.location }}</li>
          <li><span class="font-medium text-foreground">Phone:</span> {{ profileInfo.phone }}</li>
          <li><span class="font-medium text-foreground">Email:</span> {{ profileInfo.email }}</li>
          <li>
            <span class="font-medium text-foreground">GitHub:</span>
            <a :href="profileInfo.githubUrl" target="_blank" rel="noreferrer" class="underline underline-offset-4">
              {{ profileInfo.githubUrl }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold">Languages</h3>
        <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
          <li v-for="language in languages" :key="language.name">
            <span class="font-medium text-foreground">{{ language.name }}:</span> {{ language.proficiency }}
          </li>
        </ul>
      </div>
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <article v-for="group in skillGroups" :key="group.title" class="rounded-xl border bg-card p-5">
        <h3 class="font-semibold">{{ group.title }}</h3>
        <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </section>

    <section class="space-y-4">
      <h3 class="text-xl font-semibold">Experience</h3>
      <article v-for="item in timeline" :key="item.period" class="rounded-xl border bg-card p-5">
        <p class="text-sm font-medium text-muted-foreground">{{ item.period }}</p>
        <h4 class="mt-1 font-semibold">{{ item.role }}</h4>
        <p class="text-sm text-muted-foreground">{{ item.context }}</p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </article>
    </section>

    <section class="rounded-xl border bg-card p-6">
      <h3 class="text-lg font-semibold">Availability</h3>
      <ul class="mt-3 space-y-2 text-sm text-muted-foreground">
        <li>Open to frontend roles in Karachi and remote international opportunities.</li>
        <li>Preferred role: Vue.js / Nuxt.js Frontend Developer.</li>
        <li>Available for full-time positions and long-term product teams.</li>
      </ul>
    </section>

    <section class="space-y-4">
      <h3 class="text-xl font-semibold">Market-Focused Positioning</h3>
      <div class="grid gap-4 lg:grid-cols-3">
        <article v-for="profile in marketProfiles" :key="profile.market" class="rounded-xl border bg-card p-5">
          <h4 class="font-semibold">{{ profile.market }}</h4>
          <p class="mt-2 text-sm text-muted-foreground">{{ profile.headline }}</p>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li v-for="point in profile.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="space-y-4">
      <h3 class="text-xl font-semibold">Education</h3>
      <article v-for="item in education" :key="item.title" class="rounded-xl border bg-card p-5">
        <h4 class="font-semibold">{{ item.title }}</h4>
        <p class="text-sm text-muted-foreground">{{ item.institution }}</p>
        <p class="text-sm text-muted-foreground">{{ item.period }}</p>
      </article>
    </section>

    <section class="space-y-4">
      <h3 class="text-xl font-semibold">Featured projects</h3>
      <div class="grid gap-4 md:grid-cols-2">
        <PortfolioProjectCard v-for="project in topProjects" :key="project.path" :project="project" />
      </div>
    </section>
  </div>
</template>
