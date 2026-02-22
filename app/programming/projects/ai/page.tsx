import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import Image from 'next/image'
import { aiImages } from '@/content/aiImages'

export const metadata: Metadata = createPageMetadata({ title: 'AI' })

export default function AI() {
  return (
    <div className='w-full flex flex-col items-center max-w-7xl mx-auto'>
      <h1 className='header'>AI</h1>
      <p className='flex flex-col md:flex-row-reverse items-center justify-center w-full md:w-2/3 mb-16'>
        There have recently been an number of AI projects especially in the space of image generation that have absolutely amazed me.
        Here are a few outcomes of my interactions with these new systems.
        Remember that all these images have been created by Artificial Intelligence, the &apos;only&apos; input was the prompt.
      </p>
      {aiImages.map((image) => (
        <div key={image.prompt} className='flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-8 mb-16 text-left'>
          <div className='card p-4 shadow-lg block'>
            <Image
              src={image.image}
              alt={image.prompt}
              width={800}
              height={800}
              className='rounded block'
            />
          </div>
          <div className='md:w-1/2'>
            <p className='text-lg md:text-2xl mb-6 font-serif'>&quot;{image.prompt}&quot;</p>
            {image.remarks && <p className='text-sm'>Remarks: {image.remarks}</p>}
            <p className='text-sm'>Generator: {image.generator}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
