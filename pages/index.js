import Layout from '../components/Layout'
import Image from 'next/image'

export default function Index() {
  return (
    <div className='h-screen'>
      <div className='dark:bg-gray-300 rounded p-6'>
        <Image src="/icons/logo.png" width={600} height={329} alt="Logo" />
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <h1 className="text-4xl">Welcome &#x2661;</h1>
        <p>Hi, I am Christof.
          You have come to the right place.
        </p>
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
