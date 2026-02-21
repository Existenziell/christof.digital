import Socials from '@/components/Socials'
import Image from 'next/image'
import CVContent from '@/components/cv/CVContent'

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-4xl mx-auto'>
      <h1 className='header'>About</h1>

      <Image
        src="/images/about.webp"
        alt="Christof"
        width={300}
        height={600}
        className="rounded shadow-2xl"
        unoptimized
      />
      <p className='body-text mt-12'>
        I don&apos;t even know if private websites are still a thing. But here it is...
      </p>
      <p className='body-text mb-8'>
        If you&apos;d like to connect with me, please use the social links below.
      </p>
      <Socials />

      <section className="w-full mt-16">
        <h2 className='header mb-2'>Curriculum Vitae</h2>
        <CVContent />
      </section>
    </div>
  )
}
