import type { Metadata } from 'next'
import TimelineSection from '@/components/yoga/TimelineSection'
import VideoSection from '@/components/yoga/VideoSection'

export const metadata: Metadata = {
  title: 'Yoga | christof.digital',
  description:
    'Yoga journey timeline | christof.digital | shift-happens | Yoga & Movement',
}

export default function Yoga() {
  return (
    <div>
      <TimelineSection />
      <VideoSection />
    </div>
  )
}
