import type { Metadata } from 'next'
import Image from 'next/image'
import { testimonials } from '@/content/testimonials'

export const metadata: Metadata = {
  title: 'Testimonials | Yoga | christof.digital',
  description:
    'Testimonials | christof.digital | shift-happens | Yoga & Movement',
}

export default function YogaTestimonialsPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="body-text mb-4 max-w-sm text-center">
        Let&apos;s see how students described their experience with shiftHappens Yoga:
      </p>
      <div className="card p-0 overflow-hidden rounded-lg max-w-[500px] mb-8">
        <Image
          src="/images/testimonial.jpg"
          alt="Rating"
          width={500}
          height={328}
          className="w-full h-auto block"
          unoptimized
        />
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6 mx-auto px-4 sm:px-8">
        {testimonials.map((tm, index) => (
          <article
            key={`${tm.author}-${tm.date}-${index}`}
            className="card w-full min-w-0 max-w-md flex flex-col justify-between"
          >
            <p className="leading-relaxed whitespace-pre-wrap">
              {tm.text}
            </p>
            <footer className="mt-4 pt-4 border-t border-gray-dark/10 dark:border-gray/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
