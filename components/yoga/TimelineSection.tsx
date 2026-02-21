'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sorting from '@/components/Sorting'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { timeline } from '@/content/timeline'
import type { TimelineFeature } from '@/app/teaching/yoga/types'

export default function TimelineSection() {
  const [sortBy, setSortBy] = useState(true)
  const [data, setData] = useState<TimelineFeature[]>(timeline.features)

  const toggleSortBy = () => {
    setData(data.slice().reverse())
    setSortBy(!sortBy)
  }

  return (
    <section className="timeline">
      <p className="intro-text">
        The following timeline puts all the different places/learnings/teachings I was opportune to experience during my journey in chronological order.</p>

      <ScrollIndicator />
      <div className="mx-auto w-max mt-4">
        <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />
      </div>

      <ul className="w-full mt-12 max-w-7xl mx-auto space-y-4">
        {data.map((feature, index) => {
          const { image, date, name, subname, description, mapOnly } =
            feature.properties
          if (mapOnly) return null

          const imageLeft = index % 2 === 0

          return (
            <li
              key={feature.id}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center pb-8"
            >
              <div
                className={`card--timeline-image relative z-10 ${
                  imageLeft ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <Image
                  src={`/images/timeline/${image}.jpg`}
                  width={800}
                  height={450}
                  alt={name}
                  priority={index <= 1}
                  placeholder="blur"
                  blurDataURL={`/images/timeline/${image}.jpg`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div
                className={`card--timeline-text relative z-10 ${
                  imageLeft ? 'md:order-2 md:items-start md:text-left' : 'md:order-1 md:items-end md:text-right'
                }`}
              >
                <p className={`card-date-badge ${!imageLeft ? 'card-date-badge--left' : ''}`}>{date}</p>
                <h3 className="text-2xl md:text-3xl text-cta mb-1">{name}</h3>
                <h4 className="text-sm text-brand-dark dark:text-brand/80 mb-4">
                  {subname}
                </h4>
                <p
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="leading-relaxed text-brand-dark dark:text-brand body-text mb-6 [&_.link]:link"
                />
                <Link
                  href={`/teaching/yoga/map?location=${image}`}
                  className="text-xs flex items-center gap-2 hover:text-cta transition-colors w-fit"
                >
                  <span className="block dark:hidden">
                    <Image
                      src="/icons/globe.png"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </span>
                  <span className="hidden dark:block">
                    <Image
                      src="/icons/globe-dark.png"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </span>
                  <span className="link">
                    View on Map
                  </span>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="flex flex-col items-center justify-center text-center mt-16">
        <h2 className="text-2xl md:text-3xl mb-2">
          Congratulations, you made it all the way here!
        </h2>
        <p className="mb-8">I hope you enjoyed the ride :)</p>
        <a href="#top" aria-label="Scroll back up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32 text-brand-dark dark:text-brand hover:text-cta transition-colors"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
