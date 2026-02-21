import type { MainLink } from '@/types'

export const mainLinks: MainLink[] = [
  { label: 'Programming', url: '/programming' },
  { label: 'Teaching', url: '/teaching' },
  { label: 'About', url: '/about' },
]

export function isPathInSection(pathname: string | null, url: string): boolean {
  if (!pathname) return false
  return pathname === url || pathname.startsWith(url + '/')
}
