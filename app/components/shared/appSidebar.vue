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
    name: "M.Omair Sohail",
    email: "omairmedia2020@google.com",
    avatar: "https://placehold.co/600x400",
  },
  navMain: [
    {
      title: "About",
      url: "/about",
      icon: 'radix-icons:person',
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "/about/introduction",
        },
        {
          title: "Skills",
          url: "/about/skills",
        },
        {
          title: "Experience",
          url: "/about/experience",
        },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      isActive: true,
      icon: 'radix-icons:layers',
      items: [
        {
          title: "Manage",
          url: "/projects/manage",
        },
        {
          title: "List",
          url: "/projects/list",
        },
      ],
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      isActive: true,
      icon: 'radix-icons:dashboard',
      items: [
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
      ],
    },
    {
      title: "Blogs",
      url: "/blogs",
      isActive: true,
      icon: 'radix-icons:file',
      items: [
        {
          title: "Manage",
          url: "/blogs/manage",
        },
        {
          title: "View",
          url: "/blogs/list",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      isActive: true,
      icon: 'radix-icons:gear',
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SharedTeamSwitcher />
    </SidebarHeader>
    <SidebarContent>
      <SharedNavMain :items="data.navMain" />
      <!-- <SharedNavProjects :projects="data.projects" /> -->
    </SidebarContent>
    <SidebarFooter>
      <SharedNavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
