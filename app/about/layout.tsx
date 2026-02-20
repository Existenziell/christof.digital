import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import SectionTabs from '@/components/SectionTabs'

export const metadata: Metadata = createPageMetadata({ title: 'About' })

const aboutTabs = [
  { name: 'Overview', url: '/about' },
  { name: 'CV', url: '/about/cv' },
]

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8 pt-4">
      <SectionTabs tabs={aboutTabs} />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
