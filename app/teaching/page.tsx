import { teachings } from '@/content/teachings'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import FullscreenImage from '@/components/FullscreenImage'

export default function Teaching() {
  return (
    <>
      <section className='section'>
        <div className='w-full'>
          <h1 className='header'>Teaching</h1>
          <p className='intro-text'>
            There&apos;s something about teaching I can&apos;t get enough of — that moment when it clicks and you see it on their face. 
            Those &quot;aha&quot; moments are what keep me coming back.
            Over the years I have taught a variety of subjects, please find a selection below.
          </p>
        </div>
      </section>
      <section className='section--alt max-w-7xl mx-auto'>
        <ul className='w-full text-left list-none p-0 grid grid-cols-1 gap-10 md:gap-12'>
          {teachings.map((teaching, index) => {
            const isLcpImage = index === 0 && !!teaching.image
            const cardLayoutClasses = 'relative flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8'
            const cardContent = (
              <>
                {teaching.image && (
                  <div className='w-full md:max-w-lg md:shrink-0'>
                    <FullscreenImage
                      src={`/images/teachings/${teaching.image}`}
                      alt=''
                      priority={isLcpImage}
                      sizes='(max-width: 768px) 100vw, min(400px, 40vw)'
                      imageClassName='object-cover'
                    />
                  </div>
                )}
                <div className='flex flex-col min-w-0 flex-1'>
                  <p className='card-date-badge'>{teaching.date}</p>
                  <h2 className='text-xl md:text-3xl mb-3 pt-2 md:pt-0'>{teaching.title}</h2>
                  <p className='body-text text-base flex-grow'>{teaching.description}</p>
                  {teaching.link &&
                    (teaching.external ? (
                      <ExternalLink href={teaching.link} nofollow className='button-ghost'>
                        {teaching.linkText}
                      </ExternalLink>
                    ) : (
                      <Link href={teaching.link} className='button-ghost'>
                        {teaching.linkText}
                      </Link>
                    ))}
                </div>
              </>
            )
            return (
              <li key={teaching.title}>
                <article className={`card ${cardLayoutClasses}`}>
                  {cardContent}
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
