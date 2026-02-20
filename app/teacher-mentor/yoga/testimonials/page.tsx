import type { Metadata } from 'next'
import Image from 'next/image'
import { testimonials } from '@/content/site'
import Blob from '@/components/Blob'

export const metadata: Metadata = {
  title: 'Testimonials | Yoga | christof.digital',
  description:
    'Testimonials | christof.digital | shift-happens | Yoga & Movement',
}

export default function YogaTestimonialsPage() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 py-24 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand overflow-hidden">
      <h1 className="header mb-2">Testimonials</h1>
      <p className="body-text mb-12 max-w-sm text-center">
        Let&apos;s see how students described their experience with
        shift_happens_yoga:
      </p>

      <Blob
        node={
          <Image
            src="/images/rating.jpg"
            alt="Rating"
            width={500}
            height={328}
            className="rounded-lg"
            unoptimized
          />
        }
      />

      <div className="w-full flex flex-col space-y-8 mt-16 max-w-2xl mx-auto">
        {testimonials.map((tm, index) => (
          <article
            key={`${tm.author}-${tm.date}-${index}`}
            className="rounded-lg shadow-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm p-6 border border-white/10"
          >
            <p className="text-lg leading-relaxed whitespace-pre-wrap">
              {tm.text}
            </p>
            <footer className="mt-4 pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <cite className="font-semibold not-italic text-cta">
                {tm.author}
              </cite>
              <time
                dateTime={tm.date.replace(/,/g, '')}
                className="text-sm opacity-80"
              >
                {tm.date}
              </time>
            </footer>
          </article>
        ))}
      </div>
    </div>
  )
}
