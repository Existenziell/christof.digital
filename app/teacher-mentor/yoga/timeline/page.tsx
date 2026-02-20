import type { Metadata } from 'next'
import Link from 'next/link'
import Quote from '../components/Quote'
import TimelineSection from '../components/TimelineSection'
import VideoSection from '../components/VideoSection'

export const metadata: Metadata = {
  title: 'Timeline | Yoga | christof.digital',
  description:
    'Yoga journey timeline | christof.digital | shift-happens | Yoga & Movement',
}

export default function YogaTimelinePage() {
  return (
    <div
      id="top"
      className="flex flex-col items-center justify-center px-4 md:px-8 py-24"
    >
      <h1 className="header">Yoga</h1>
      <p className="body-text mb-4 md:px-32 max-w-3xl">
        Yoga had quite an impact on my life. A groundbreaking impact indeed, that
        changed so much, so drastically, for the better. The following timeline
        is trying to put all the different places/learnings/teachings I was
        opportune to experience during my journey in semantic and chronological
        context. If you prefer an even more visual context,{' '}
        <Link
          href="/teacher-mentor/yoga/map"
          className="link"
        >
          visit the Map
        </Link>
        .
      </p>
      <p className="body-text">As one of my best teachers always used to say:</p>
      <Quote
        text="Make your breath louder than your thoughts"
        classes="mt-4 mb-12"
      />
      <TimelineSection />
      <VideoSection />
    </div>
  )
}
