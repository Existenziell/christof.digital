import Head from 'next/head'
import Image from 'next/image'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { creations } from '../lib/creations'

const AI = () => {
  return (
    <>
      <Head>
        <title>AI | christof.digital</title>
        <meta name='description' content="AI | christof.digital" />
      </Head>

      <div className='text-left w-full'>
        <ScrollIndicator />

        <h1 className='text-4xl md:text-6xl mb-8 text-center'>AI</h1>

        <p className='flex flex-col md:flex-row-reverse items-center justify-center text-center mx-auto w-full md:w-2/3 mb-16'>
          There have recently been an number of AI projects especially in the space of image generation that have absolutely amazed me.
          Here are a few outcomes of my interactions with these new systems.
          Remember that all these images have been created by Artificial Intelligence, the &apos;only&apos; input was the prompt.
        </p>
        {creations.map(creation =>
          <div key={creation.prompt} className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16'>
            <div className='bg-gray dark:bg-gray-dark p-4 rounded nextimg'>
              <Image
                src={creation.image}
                alt={creation.prompt}
                width={800}
                height={800}
              />
            </div>
            <div className='md:w-1/2 font-serif'>
              <p className='text-lg md:text-2xl mb-2'>&quot;{creation.prompt}&quot;</p>
              {creation.remarks && <p className='text-sm'>Remarks: {creation.remarks}</p>}
              <p className='text-sm'>Generator: {creation.generator}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AI
