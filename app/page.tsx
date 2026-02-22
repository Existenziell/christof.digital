import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='section flex flex-1 flex-col lg:flex-row items-center lg:justify-center lg:gap-8 w-full'>
      <div className='flex flex-col md:leading-relaxed lg:w-1/2 lg:text-right lg:border-r-2 lg:border-cta lg:pr-12 rounded'>
        <h1 className='header'>Hi, I am Christof</h1>
        <p className='body-text mb-2 lg:text-right max-w-md lg:ml-auto'>
          I build software and love to teach and share my knowledge with others.
        </p>
        <p className='mb-10 lg:text-right max-w-md lg:ml-auto'>
          Currently looking for my next gig — ideally in the Bitcoin open source ecosystem. Please reach out if you are looking for a developer with a passion!
        </p>
        <div className='flex flex-wrap gap-4 justify-center lg:justify-end'>
          <Link href='/programming' className='button min-w-[10rem] text-center'>Programming</Link>
          <Link href='/teaching' className='button min-w-[10rem] text-center'>Teaching</Link>
        </div>
      </div>
      <div className='lg:w-1/2 mt-8 lg:mt-0 align-top block'>
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
