import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Success' })

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return children
}
