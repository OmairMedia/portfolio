<template>
    <Badge :variant="variant">
        {{ text }}
    </Badge>
</template>
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'

defineProps<{
    text?: string
    variant?: "secondary" | "default" | "destructive" | "outline" | null | undefined
}>()
</script>