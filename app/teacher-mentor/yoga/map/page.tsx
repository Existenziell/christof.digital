import type { Metadata } from 'next'
import MapPageClient from './MapPageClient'

export const metadata: Metadata = {
  title: 'Map | Yoga | christof.digital',
  description:
    'Explore with me | christof.digital | shift-happens | Yoga & Movement',
}

export default function YogaMapPage() {
  return <MapPageClient />
}
