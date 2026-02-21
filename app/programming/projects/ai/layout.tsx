import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'AI' })

export default function AILayout({ children }: { children: React.ReactNode }) {
  return children
}
