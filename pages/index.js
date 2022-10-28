import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8 w-full px-8'>
      <div className='flex flex-col md:leading-relaxed lg:w-1/2 lg:text-right lg:border-r-2 lg:border-cta lg:pr-12 rounded' data-testid="content">
        <h1 className='text-4xl md:text-6xl dark:text-cta mb-8'>Hi, I am Christof</h1>
        <p className='mb-3'>You have come to the right place.</p>
        <p className='mb-3 lg:text-right'>
          If you are looking for a Fullstack Engineer (Web, Mobile, Blockchain) with more than 15 years of experience.
          I am always looking for enticing projects and connections.
          You can find more information in my {` `}
          <Link href='/cv'><a className='link'>CV</a></Link>{` `}
          and on the{` `}
          <Link href='/projects'><a className='link'>projects page</a></Link>
          <br /><br />
          Please <Link href='/contact'><a className='link'>contact me</a></Link> if you see possible synergies or have questions.
          And in case you came here for Yoga, you&apos;ll find all information at{' '}
          <Link href='http://yoga.christof.digital/'>
            <a className='link' rel='noopener noreferrer nofollow'>yoga.christof.digital</a>
          </Link>.
        </p>
        <h1 className='text-4xl md:text-6xl dark:text-cta mt-8'>Enjoy</h1>
      </div>
      <div className='lg:w-1/2 mt-8 lg:mt-0 align-top nextimg shadow-2xl' data-testid="image">
        <Image src='/root.webp'
          width={2000}
          height={1225}
          alt='Logo'
          priority={true}
          objectFit='contain'
          className='rounded-sm'
        />
      </div>
    </section>
  )
}
