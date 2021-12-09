import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <div className='relative'>

      <Link href='http://app.christof.digital'>
        <a className='absolute -top-12 right-0 block px-4 py-3 text-sm border-black border border-dashed hover:bg-brand hover:text-white hover:font-extrabold hover:border-transparent transition-all'>
          Launch App
        </a>
      </Link>

      <section className='lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-4 lg:pb-32 w-full'>
        <div className='dark:bg-gray-300 rounded p-6 lg:w-1/2 '>
          <Image src='/icons/logo.png' width={600} height={329} alt='Logo' priority={true} />
        </div>
        <div className='mt-12 lg:mt-0 flex flex-col gap-8 leading-relaxed lg:w-1/2 lg:text-right'>
          <h1 className='text-4xl'>Hi, I am Christof</h1>
          <p>You have come to the right place.<br />
            I am a Fullstack App Developer (Web, Blockchain), travelling the world and looking for enticing projects and humans.
            Please <Link href='/contact'><a className='link'>contact me</a></Link> if you see possible synergies or have questions.
          </p>
          <p>
            If you came here for Yoga, you&apos;ll find all information on{' '}
            <Link href='http://yoga.christof.digital/'><a className='link' rel='noopener noreferrer nofollow'>yoga.christof.digital</a></Link>.
          </p>
        </div>
      </section>

    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
