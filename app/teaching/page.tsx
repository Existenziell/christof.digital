import Image from 'next/image'
import { teachings } from '@/content/teachings'
import Link from 'next/link'

export default function Teaching() {
  return (
    <div className='w-full'>
      <h1 className='header'>Teaching</h1>
      <p className='intro-text--spacing-lg'>
        I have always enjoyed teaching and sharing my knowledge with others. I just cannot get enough of the delight to see students&apos; eyes light up when they have an &quot;aha&quot; moment.
      </p>
      <div className='w-full text-left grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {teachings.map((teaching) => {
          const cardContent = (
            <>
              <p className='card-date-badge'>{teaching.date}</p>
              <h2 className='text-2xl font-serif mb-3 pt-4'>{teaching.title}</h2>
              <p className='body-text text-sm flex-grow mb-6'>{teaching.description}</p>
              {teaching.image && (
                <div className='block mb-4 rounded overflow-hidden'>
                  <Image
                    src={`/images/teachings/${teaching.image}`}
                    alt=''
                    width={600}
                    height={360}
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='w-full h-[400px] object-cover block'
                  />
                </div>
              )}
            </>
          )
          return teaching.link ? (
            teaching.external ? (
              <a
                key={teaching.title}
                href={teaching.link}
                target='_blank'
                rel='noopener noreferrer nofollow'
                className="card card--link relative"
                aria-label={`Link to ${teaching.title}`}
              >
                {cardContent}
              </a>
            ) : (
              <Link key={teaching.title} href={teaching.link} className="card card--link relative" aria-label={`Link to ${teaching.title}`}>
                {cardContent}
              </Link>
            )
          ) : (
            <article key={teaching.title} className="card relative flex flex-col">
              {cardContent}
            </article>
          )
        })}
      </div>
    </div>
  )
}
