import Socials from '@/components/Socials'
import Image from 'next/image'
import Curriculum from '@/components/cv/Curriculum'

export default function About() {
  return (
    <>
      <section className='section'>
        <div className='flex flex-col items-center justify-center w-full max-w-4xl mx-auto mb-6'>
          <h1 className='header'>About</h1>
          <p className='body-text'>
            I don&apos;t even know if private websites are still a thing. But here it is...
          </p>
          <p className='body-text mb-6'>
            If you&apos;d like to connect with me, please use the social links below.
          </p>
          <Socials />
          <Image
            src="/images/about.webp"
            alt="Christof"
            width={553}
            height={848}
            sizes="(max-width: 768px) 100vw, 300px"
            className="rounded shadow-2xl my-8 h-auto w-full max-w-[300px]"
            style={{ height: 'auto' }}
            priority
            unoptimized
          />
        </div>
      </section>

      <section className='section--alt'>
        <div className='w-full max-w-4xl mx-auto'>
          <h2 className='header mb-2'>Curriculum Vitae</h2>
          <Curriculum />
        </div>
      </section>
    </>
  )
}
