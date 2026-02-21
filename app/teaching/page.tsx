import Image from 'next/image'
import { teachings } from '@/content/teachings'
import Link from 'next/link'

export default function Teaching() {
  return (
    <>
      <section className='section'>
        <div className='w-full'>
          <h1 className='header'>Teaching</h1>
          <p className='intro-text'>
            I have always enjoyed teaching and sharing my knowledge with others. I just don&apos;t seem to get enough of the delight to see students&apos; eyes light up when they have one of these incredible &quot;aha&quot; moments.
          </p>
        </div>
      </section>
      <section className='section--alt'>
        <div className='w-full text-left grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8'>
        {teachings.map((teaching) => {
          const cardContent = (
            <>
              <p className='card-date-badge'>{teaching.date}</p>
              <h2 className='text-2xl mb-3 pt-6'>{teaching.title}</h2>
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
      </section>
    </>
  )
}
