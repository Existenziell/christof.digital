import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'JavaScript Playground' })

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return children
}
