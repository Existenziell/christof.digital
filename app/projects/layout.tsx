import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Projects' })

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
