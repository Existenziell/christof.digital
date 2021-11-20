import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <div className='h-screen relative'>

      <Link href="http://app.christof.digital">
        <a className='absolute -top-12 right-0 block px-4 py-3 text-sm border-black border border-dashed hover:bg-brand hover:text-white hover:font-extrabold transition-all'>
          Launch App
        </a>
      </Link>

      <div className='dark:bg-gray-300 rounded p-6'>
        <Image src="/icons/logo.png" width={600} height={329} alt="Logo" />
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <h1 className="text-4xl">Welcome &#x2661;</h1>
        <p>Hi, I am Christof.<br />You have come to the right place.</p>
        <div>
          <h2>Let's find out what I can do for you!</h2>
          <p>You most probably came here for one of the following reasons:</p>
          <ul className='mt-4 flex flex-col gap-2'>
            <li><Link href="/coding"><a className='link'>Development (Web, Mobile, Blockchain)</a></Link></li>
            <li><Link href="/cv"><a className='link'>My Curriculum Vitae</a></Link></li>
            <li><Link href="/yoga"><a className='link'>Yoga (shift_happens?)</a></Link></li>
          </ul>
        </div>

      </div>
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
