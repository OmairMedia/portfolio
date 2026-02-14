<template>
    <div>
        <!-- <SharedPageBadge text="About" variant="outline" class="mb-4"/> -->
        <AboutIntroductionSummaryCard />
    </div>
</template>
<script setup lang="ts">

import { Skeleton } from '@/components/ui/skeleton'

definePageMeta({
    name: 'About Introduction',
    layout: 'default'
})
</script>