<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://placehold.co/600x400",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: 'radix-icons:view-vertical',
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: 'radix-icons:speaker-loud',
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: 'radix-icons:server',
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: 'radix-icons:square',
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: 'radix-icons:discord-logo',
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: 'radix-icons:discord-logo',
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: 'radix-icons:gear',
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: 'radix-icons:frame',
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: 'radix-icons:pie-chart',
    },
    {
      name: "Travel",
      url: "#",
      icon: 'radix-icons:drawing-pin',
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SharedTeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <SharedNavMain :items="data.navMain" />
      <SharedNavProjects :projects="data.projects" />
    </SidebarContent>
    <SidebarFooter>
      <SharedNavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
