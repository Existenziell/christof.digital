'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sorting from '@/components/Sorting'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { timeline } from '../data/timeline'
import type { TimelineFeature } from '../types'

export default function TimelineSection() {
  const [sortBy, setSortBy] = useState(true)
  const [data, setData] = useState<TimelineFeature[]>(timeline.features)

  const toggleSortBy = () => {
    setData(data.slice().reverse())
    setSortBy(!sortBy)
  }

  return (
    <section
      id="timeline"
      className="timeline dark:bg-brand-dark bg-brand py-8 px-4 md:px-8"
    >
      <h2 className="text-4xl mb-2">The Timeline:</h2>

      <ScrollIndicator />
      <div className="mx-auto w-max mt-4">
        <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />
      </div>

      <ul className="w-full mt-12 max-w-4xl mx-auto">
        {data.map((feature, index) => {
          const { image, date, name, subname, description, mapOnly } =
            feature.properties
          if (mapOnly) return null

          const imageNum = Number(image)
          const isEven = imageNum % 2 === 0

          return (
            <li
              key={feature.id}
              className={`mb-16 sm:w-4/5 relative rounded shadow-lg bg-white dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/20 ${
                isEven ? 'ml-auto text-right' : 'text-left'
              }`}
            >
              <Image
                src={`/images/timeline/${image}.jpg`}
                width={800}
                height={450}
                alt={name}
                priority={index === 1 || index === 19}
                placeholder="blur"
                blurDataURL={`/images/timeline/${image}.jpg`}
                className="rounded-t w-full h-auto"
              />
              <div
                className={`absolute top-0 text-white bg-white/10 backdrop-blur-md p-2 rounded-tl ${
                  isEven ? 'right-0 rounded-bl-md' : 'left-0 rounded-br-md'
                }`}
              >
                {date}
              </div>
              <div className="p-4">
                <h3 className="text-3xl mt-3 text-cta">{name}</h3>
                <h4 className="text-sm mb-6 opacity-80">{subname}</h4>
                <p
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="leading-relaxed"
                />
                <Link
                  href={`/teacher-mentor/yoga/map?location=${image}`}
                  className="text-xs flex items-center mt-4 gap-2"
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
                  <span className="ml-2 border border-transparent hover:border-b hover:border-cta transition-all">
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
