import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import SectionTabs from '@/components/SectionTabs'

export const metadata: Metadata = createPageMetadata({ title: 'Software Engineer' })

const softwareEngineerTabs = [
  { name: 'Overview', url: '/software-engineer' },
  { name: 'Projects', url: '/software-engineer/projects' },
  { name: 'Bitcoin', url: '/software-engineer/bitcoin' },
  { name: 'Playground', url: '/software-engineer/playground' },
]

export default function SoftwareEngineerLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8 pt-4">
      <SectionTabs tabs={softwareEngineerTabs} />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
