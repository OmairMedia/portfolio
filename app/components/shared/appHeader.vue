<template>
    <header
        class="w-full flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
            <SidebarTrigger class="-ml-1" />
            <Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                    <template v-for="(crumb, index) in breadcrumbs" :key="index">
                        <BreadcrumbItem class="hidden md:block">
                            <BreadcrumbLink>
                                {{ crumb.label }}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1" class="hidden md:block" />
                    </template>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div class="px-4 flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline">
                        <Icon name="radix-icons:moon"
                            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Icon name="radix-icons:sun"
                            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span class="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem @click="colorMode.preference = 'light'">
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="colorMode.preference = 'dark'">
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="colorMode.preference = 'system'">
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <!-- <Separator class="h-8" orientation="vertical" /> -->
            <SharedAppHeaderUser />
        </div>
    </header>

</template>
<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { generateBreadcrumbs } from '@/lib/utils'
const colorMode = useColorMode()
const route = useRoute()

const activeRoute = ref(route.path)

// Transform Route Path into Breadcrumb
const breadcrumbs = computed(() =>
    generateBreadcrumbs(route.path)
)
</script>