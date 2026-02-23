<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <header class="space-y-3">
    <p v-if="eyebrow" class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
      {{ eyebrow }}
    </p>
    <h2 class="text-2xl font-semibold md:text-3xl">
      {{ title }}
    </h2>
    <p v-if="description" class="max-w-2xl text-sm text-muted-foreground md:text-base">
      {{ description }}
    </p>
  </header>
</template>
