import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'API' })

export default function ApiLayout({ children }: { children: React.ReactNode }) {
  return children
}
