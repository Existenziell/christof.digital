import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Stack Game' })

export default function StackGameLayout({ children }: { children: React.ReactNode }) {
  return children
}
