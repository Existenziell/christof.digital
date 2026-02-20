import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Curriculum Vitae' })

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children
}
