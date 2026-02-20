import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Software Engineer' })

export default function SoftwareEngineerLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
