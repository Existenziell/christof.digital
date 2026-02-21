import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Programming' })

export default function ProgrammingLayout({
  children,
}: { children: React.ReactNode }) {
  return <main className="min-w-0 flex-1 pt-4">{children}</main>
}
