import Image from 'next/image'
import Layout from '../components/Layout'

const AI = () => {
  const creations = [
    {
      image: '/ai/programmer.png',
      prompt: "A programmer trying to build a web3 website in his hut in the jungle, struggling with the purpose of life, glancing into the distance.",
      remarks: "This was my first ever AI generated image - funnily enough, there are some resemblances with myself... should I be scared, Dall-E? ",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/frog.jpg',
      prompt: "A colorful frog on a leaf, looking curiously at the camera, dense jungle in the background",
      remarks: "I just love frogs, and this one is just amazing.",
      generator: 'Stable Diffusion (Stability AI)',
    },
    {
      image: '/ai/spider.jpg',
      prompt: "A colorful jumping spider with huge eyes.",
      remarks: "These tiny animals are absolutely wonderful. Please stop killing them.",
      generator: 'Stable Diffusion (Stability AI)',
    },
    {
      image: '/ai/cat.png',
      prompt: "An ultra-realistic cat with beautiful expressive eyes, closeup, wide cinematic shot.",
      remarks: "The gaze got me...",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/octopus.png',
      prompt: " A photorealistic octopus in an underwater scene.",
      remarks: "An homage to these fantastic animals.",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/jungle.jpg',
      prompt: "A 3d render of a synthwave neon jungle forest, lush and dense, monkeys playing, sun shafts",
      remarks: "I cannot find the monkeys, can you?",
      generator: 'Stable Diffusion (Stability AI)',
    },
    {
      image: '/ai/yogi.png',
      prompt: "A yoga teacher in powerful Mayurasana pose, early morning on a mountain plateau, wide views, animals around, oil painting.",
      remarks: "Having lived in Nepal for 2 years myself, the AI just nailed this one, even though this is not Mayurasana.",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/yeu.png',
      prompt: "The island Ile d'Yeu in France during spring time, Côte sauvage.",
      remarks: "My mother is from this island, and what the AI created here is absolutely accurate... crazy.",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/black.png',
      prompt: "Black forest in Germany, winter scene, sunny, photorealistic, wide angle.",
      remarks: "I was born in the black forest and seeing this recreation is quite emotional, so good.",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/algarve.png',
      prompt: "Algarve in Portugal, south coast during spring time, surfer in the distance, uplifting mood.",
      remarks: "Dedicated to my brother Patrick",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/hamburg.png',
      prompt: "Hamburg in Germany during spring time.",
      remarks: "I lived for 8 years in Hamburg. And again, the AI just gets it, the atmosphere, the colors...",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/muehlenkamp.png',
      prompt: "Mühlenkamp in Hamburg, Germany, sunny disposition, oil painting.",
      remarks: "An area in Hamburg that I called home for many years... Beautiful picture.",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/paris.png',
      prompt: "Place de la Bastille, Paris, during presidential election.",
      remarks: "I actually lived in Paris Place de la Bastille during the 2007 presidential election, so this is quite interesting to see. The pigeons look quite funny though.",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/diver.png',
      prompt: "Freediver deep in a massive sinkhole, floating upright, seen from the side.",
      remarks: "You can even see the bubbles floating to the surface.",
      generator: 'DALL·E 2 (OpenAI)',
    },
    {
      image: '/ai/tiny.jpg',
      prompt: "An ultra modern tiny house",
      remarks: "One day I want to live in one of those. Let us get some inspiration, shall we?",
      generator: 'Stable Diffusion (Stability AI)',
    },
    {
      image: '/ai/peace.jpg',
      prompt: "World peace.",
      remarks: "Very interesting result, Africa and Europe seem to be somehow bound together and South America is all shattered?",
      generator: 'Stable Diffusion (Stability AI)',
    },
  ]

  return (
    <div className='text-left w-full'>
      <h1 className='text-4xl lg:text-6xl mb-8 text-center'>AI</h1>

      <p className='flex flex-col md:flex-row-reverse items-center justify-center text-center mx-auto w-full md:w-2/3 mb-16'>
        There have recently been an number of AI projects especially in the space of image generation that have absolutely amazed me.
        Here are a few outcomes of my interactions with these new systems.
        Remember that all these images have been created by Artificial Intelligence, the &apos;only&apos; input was the prompt.
      </p>
      {creations.map(creation =>
        <div key={creation.prompt} className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16'>
          <div className='bg-gray dark:bg-gray-dark p-4 rounded nextimg'>
            <Image src={creation.image} alt={creation.prompt} width={800} height={800} />
          </div>
          <div className='md:w-1/2 font-serif'>
            <p className='text-lg md:text-2xl mb-2'>&quot;{creation.prompt}&quot;</p>
            {creation.remarks && <p className='text-sm'>Remarks: {creation.remarks}</p>}
            <p className='text-sm'>Generator: {creation.generator}</p>
          </div>
        </div>
      )}
    </div>
  )
}

AI.getLayout = function getLayout(page) {
  return (
    <Layout title='AI'>
      {page}
    </Layout>
  )
}

export default AI
