<template>
   <SidebarProvider>
      <SharedAppBar />
      <main>
         <SidebarTrigger />
         <slot />
      </main>
   </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>