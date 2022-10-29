import Head from 'next/head'
import Image from 'next/image'
import { ScrollIndicator } from '../../components/ScrollIndicator'
import { creations } from '../../lib/creations'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

const AI = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray('.panel').forEach((p) => {
      gsap.fromTo(
        p,
        { y: 200, opacity: 0, },
        {
          scrollTrigger: {
            trigger: p,
            toggleActions: "play none none reverse",
            start: '100px bottom',
          },
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'expo.out',
        }
      )
    })
  }, [])

  return (
    <>
      <Head>
        <title>AI | christof.digital</title>
        <meta name='description' content="AI | christof.digital" />
      </Head>

      <div className='w-full flex flex-col items-center'>
        <ScrollIndicator />

        <h1 className='h1'>AI</h1>

        <p className='flex flex-col md:flex-row-reverse items-center justify-center w-full md:w-2/3 mb-16'>
          There have recently been an number of AI projects especially in the space of image generation that have absolutely amazed me.
          Here are a few outcomes of my interactions with these new systems.
          Remember that all these images have been created by Artificial Intelligence, the &apos;only&apos; input was the prompt.
        </p>
        {creations.map(creation =>
          <div key={creation.prompt} className='panel flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 text-left'>
            <div className='bg-gray dark:bg-gray-dark p-4 rounded shadow-lg nextimg'>
              <Image
                src={creation.image}
                alt={creation.prompt}
                width={800}
                height={800}
                placeholder="blur"
                blurDataURL={creation.image}
                className='rounded'
              />
            </div>
            <div className='md:w-1/2'>
              <p className='text-lg md:text-2xl mb-6 font-serif'>&quot;{creation.prompt}&quot;</p>
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
