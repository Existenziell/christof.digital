import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8 w-full px-8'>
      <div className='flex flex-col md:leading-relaxed lg:w-1/2 lg:text-right lg:border-r-2 lg:border-cta lg:pr-12 rounded' data-testid="content">
        <h1 className='header mb-8'>Hi, I am Christof</h1>
        <p className='body-text mb-6 lg:text-right'>
          I build software and teach. Pick where you want to go.
        </p>
        <div className='flex flex-wrap gap-4 lg:justify-end'>
          <Link href='/software-engineer' className='button button-cta'>Software Engineer</Link>
          <Link href='/teacher-mentor' className='button button-cta'>Teacher / Mentor</Link>
        </div>
      </div>
      <div className='lg:w-1/2 mt-8 lg:mt-0 align-top nextimg shadow-2xl' data-testid="image">
        <Image
          src='/root.webp'
          width={2000}
          height={1225}
          alt='Logo'
          priority
          style={{ objectFit: 'contain' }}
          className='rounded-sm'
        />
      </div>
    </section>
  )
}
