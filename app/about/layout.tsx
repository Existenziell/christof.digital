import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'About' })

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return <div className="min-w-0 flex-1">{children}</div>
}
