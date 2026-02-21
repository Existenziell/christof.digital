import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='flex flex-1 flex-col justify-center lg:flex-row lg:items-center lg:justify-center lg:gap-8 w-full'>
      <div className='flex flex-col md:leading-relaxed lg:w-1/2 lg:text-right lg:border-r-2 lg:border-cta lg:pr-12 rounded' data-testid="content">
        <h1 className='header mb-8'>Hi, I am Christof</h1>
        <p className='body-text mb-6 lg:text-right'>
          I build software and teach. Pick where you want to go.
        </p>
        <div className='flex flex-wrap gap-4 justify-center lg:justify-end'>
          <Link href='/programming' className='button button-cta'>Programming</Link>
          <Link href='/teaching' className='button button-cta'>Teaching</Link>
        </div>
      </div>
      <div className='lg:w-1/2 mt-8 lg:mt-0 align-top block' data-testid="image">
        <Image
          src='/images/home.jpg'
          width={600}
          height={600}
          alt='Christof'
          priority
          style={{ objectFit: 'contain' }}
          className='rounded shadow-2xl block'
        />
      </div>
    </section>
  )
}
