import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({ title: 'Teacher / Mentor' })

export default function TeacherMentorLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
