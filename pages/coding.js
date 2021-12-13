import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { code } from '../lib/code'

const Coding = () => {
  return (
    <div className='text-left w-full'>

      <Link href='http://app.christof.digital'>
        <a className='fixed right-2 sm:right-0 bottom-0 block py-2 px-1 sm:p-2 text-sm
          border border-dashed border-gray-500 transition-all dark:bg-brand dark:border-none
        hover:bg-brand hover:text-white hover:font-extrabold hover:px-3'
          style={{ writingMode: 'vertical-rl' }} target='_blank' rel='noopener noreferrer nofollow'>
          Launch App
        </a>
      </Link>

      <h1 className='text-4xl lg:text-6xl mb-8 text-center'>I love Code</h1>

      <div className='flex flex-col md:flex-row-reverse items-center justify-center mx-auto w-full md:w-2/3 lg:1/2 md:mb-16'>
        <p className='w-full md:text-left md:w-2/3 md:border-l-2 md:border-brand md:pl-6 rounded'>
          <span className='block mb-2'>I have been writing Code since the year 2000.</span>
          Web-Development especially has been changing so much over the years, it has been and still is a pleasure to witness all of this.
          Having worked mostly in the backend for years (PHP, Ruby on Rails, Java, nodeJS, ...) I later went Fullstack JavaScript and nowadays this distinction is rarely made any more.
          Modern tooling and build chains are just amazing and make me enjoy development even more today.
          <span className='text-sm block mt-2'>Current stack: NextJS, TailwindCSS, Vercel, JAM Stack mostly.</span>
        </p>
        <div className='my-8'>
          <Image src='/icons/firmware.svg' width={300} height={150} alt='Firmware' />
        </div>
      </div>

      <div>
        <div className='hidden dark:block text-6xl'>
          <SyntaxHighlighter language='javascript' style={dracula} showLineNumbers={true} customStyle={{ fontSize: "14px", lineHeight: "20px" }}>
            {code}
          </SyntaxHighlighter>
        </div>
        <div className='block dark:hidden'>
          <SyntaxHighlighter language='javascript' style={atomOneLight} showLineNumbers={true} customStyle={{ fontSize: "14px", lineHeight: "20px" }}>
            {code}
          </SyntaxHighlighter>
        </div>

        <div className='lg:w-2/3 lg:mx-auto'>
          <p className='mt-8'>
            Recently I also ventured into the realms of the Blockchain, what a time to be alive! Web3 is just amazing and the pace of evolution absolutely breathtaking. The possibilities...!
          </p>

          <div className='md:flex md:flex-row-reverse items-start mt-8 justify-between'>
            <div className='block md:hidden'>
              <Image src='/icons/hacker.svg' width={350} height={250} alt='Coder' />
            </div>
            <div className='hidden md:block' style={{ transform: 'rotateY(180deg)' }}>
              <Image src='/icons/hacker.svg' width={350} height={250} alt='Coder' />
            </div>
            <div className=''>
              <h2 className='text-xl mb-2'>Further resources:</h2>
              <Link href='/cv'><a className='link'>Curriculum Vitae</a></Link><br />
              <Link href='/contact'><a className='link'>Contact me</a></Link><br />
              <Link href='https://github.com/Existenziell'><a className='link' target='_blank' rel='noopener noreferrer nofollow'>Github</a></Link>
              <p className='text-4xl text-brand mt-8 md:mt-24'>&#x25CF; &#x25CF; &#x25CF;</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

Coding.getLayout = function getLayout(page) {
  return (
    <Layout title='Coding'>
      {page}
    </Layout>
  )
}

export default Coding
