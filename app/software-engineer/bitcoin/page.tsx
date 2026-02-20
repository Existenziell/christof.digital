import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Bitcoin',
  description: 'Bitcoin | Software Engineer | christof.digital',
})

export default function BitcoinPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:w-2/3 lg:mx-auto">
      <h1 className="header">Bitcoin</h1>
      <p className="body-text">
        Content for this section will be added later.
      </p>
    </div>
  )
}
