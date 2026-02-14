<template>
   <div class="w-full">
      <SidebarProvider>
      <SharedAppSidebar />
      <main class="w-full">
         <SharedAppHeader />
         <div class="p-4">
            <slot />
         </div>
      </main>
   </SidebarProvider>
   </div>
</template>

<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>