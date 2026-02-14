import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function formatLabel(segment: string) {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}

export function generateBreadcrumbs(routePath: string) {
  const segments = routePath.split('/').filter(Boolean)

  const breadcrumbs = [
    { label: 'Home', path: '/' }
  ]

  let currentPath = ''

  segments.forEach(segment => {
    currentPath += `/${segment}`

    breadcrumbs.push({
      label: formatLabel(segment),
      path: currentPath
    })
  })

  return breadcrumbs
}


