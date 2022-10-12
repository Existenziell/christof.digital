import Head from 'next/head'
import Link from 'next/link'

const Success = () => {
  return (
    <>
      <Head>
        <title>Success | christof.digital</title>
        <meta name='description' content="Success | christof.digital" />
      </Head>

      <div>
        <div className='flex flex-col items-center justify-center text-center text-3xl h-full'>
          <h1 className='text-4xl md:text-6xl'>Thank you!</h1>
          <Link href='/'>
            <a className='mt-20'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-32 w-32 hover:scale-[102%] hover:text-cta transition-all' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd' />
              </svg>
            </a>
          </Link>

          <div className='flex items-center gap-4'>
            <Link href='/cv'>
              <a className='mt-48 text-sm button'>CV</a>
            </Link>
            <Link href='/projects'>
              <a className='text-sm button'>Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Success
