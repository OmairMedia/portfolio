import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'page',
      source: 'blogs/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).default([]),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: z.object({
        title: z.string(),
        summary: z.string(),
        role: z.string(),
        stack: z.array(z.string()).default([]),
        problem: z.string(),
        approach: z.string(),
        outcomes: z.array(z.string()).default([]),
        highlights: z.array(z.string()).default([]),
        repoUrl: z.string().optional(),
        liveUrl: z.string().optional(),
        date: z.string(),
      }),
    }),
  },
})
