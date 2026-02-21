import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'ThreeJS' })

export default function ThreeJSLayout({ children }: { children: React.ReactNode }) {
  return children
}
