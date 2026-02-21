import type { Metadata } from 'next'
import Timeline from '@/components/yoga/Timeline'
import Video from '@/components/yoga/Video'

export const metadata: Metadata = {
  title: 'Yoga | christof.digital',
  description:
    'Yoga journey timeline | christof.digital | shift-happens | Yoga & Movement',
}

export default function Yoga() {
  return (
    <div>
      <Timeline />
      <Video />
    </div>
  )
}
