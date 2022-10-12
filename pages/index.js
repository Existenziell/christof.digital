import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <section className='lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-8 lg:pb-32 w-full px-8 md:pt-16'>
      <div className='block dark:hidden lg:w-1/2'>
        <Image src='/icons/logo.png' width={600} height={329} alt='Logo' priority={true} />
      </div>
      <div className='hidden dark:block lg:w-1/2'>
        <Image src='/icons/logo-dark.png' width={600} height={329} alt='Logo' priority={true} />
      </div>
      <div className='mt-12 lg:mt-0 flex flex-col leading-relaxed lg:w-1/2 lg:text-right lg:border-r-2 lg:border-cta lg:pr-12 rounded'>
        <h1 className='text-5xl lg:text-4xl my-8 lg:mt-0'>Hi, I am Christof</h1>
        <p className='mb-3'>You have come to the right place.</p>
        <p className='mb-3'>
          If you are looking for a Fullstack App Developer (Web, Mobile, Blockchain) with more than 15 years of experience.
          I am always looking for enticing projects and connections.
          You can find more information in my {` `}
          <Link href='/cv'><a className='link'>CV</a></Link>{` `}
          and on the{` `}
          <Link href='/projects'><a className='link'>projects page</a></Link>
        </p>
        <p>
          Please <Link href='/contact'><a className='link'>contact me</a></Link> if you see possible synergies or have questions.
        </p>
        <p>
          If you came here for Yoga, you&apos;ll find all information on{' '}
          <Link href='http://yoga.christof.digital/'><a className='link' rel='noopener noreferrer nofollow'>yoga.christof.digital</a></Link>.
        </p>
      </div>
    </section>
  )
}
