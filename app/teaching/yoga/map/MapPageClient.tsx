'use client'

import dynamic from 'next/dynamic'

const YogaMap = dynamic(
  () => import('@/components/yoga/YogaMap').then((m) => m.default),
  { ssr: false }
)

export default function MapPageClient() {
  return (
    <div className="w-full h-screen">
      <YogaMap />
    </div>
  )
}
