import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import SectionTabs from '@/components/SectionTabs'

export const metadata: Metadata = createPageMetadata({ title: 'Teacher / Mentor' })

const teacherMentorTabs = [
  { name: 'Overview', url: '/teacher-mentor' },
  { name: 'Languages', url: '/teacher-mentor/languages' },
  {
    name: 'Yoga',
    url: '/teacher-mentor/yoga',
    subTabs: [
      { name: 'Timeline', url: '/teacher-mentor/yoga/timeline' },
      { name: 'Map', url: '/teacher-mentor/yoga/map' },
      { name: 'Testimonials', url: '/teacher-mentor/yoga/testimonials' },
    ],
  },
  { name: 'Tech', url: '/teacher-mentor/tech' },
]

export default function TeacherMentorLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8 pt-4">
      <SectionTabs tabs={teacherMentorTabs} />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
