import type { Metadata } from 'next'
import FullscreenImage from '@/components/FullscreenImage'
import { testimonials } from '@/content/testimonials'

export const metadata: Metadata = {
  title: 'Testimonials | Yoga | christof.digital',
  description:
    'Testimonials | christof.digital | shift-happens | Yoga & Movement',
}

export default function YogaTestimonialsPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="card p-0 overflow-hidden rounded-lg max-w-[500px] mb-8">
        <FullscreenImage
          src="/images/testimonial.jpg"
          alt="Rating"
          sizes="(max-width: 768px) 100vw, 500px"
          imageClassName="object-cover"
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
            <div className="mt-4 pt-4 border-t border-gray-dark/10 dark:border-gray/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <cite className="font-semibold not-italic text-cta">
                {tm.author}
              </cite>
              <time
                dateTime={tm.date.replace(/,/g, '')}
                className="text-sm opacity-80"
              >
                {tm.date}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
