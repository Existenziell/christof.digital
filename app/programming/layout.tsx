import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Programming' })

export default function ProgrammingLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
