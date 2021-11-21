import Link from 'next/link'
import Layout from '../components/Layout'
import Quote from '../components/Quote'
import Timeline from '../components/Timeline'

const Yoga = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className='text-4xl mb-8'>Yoga</h1>
      <p className='mb-4 md:px-32 leading-relaxed'>
        Yoga really had an impact on my life. A groundbreaking impact that changed so much and helped me become a better version of myself (as cliché as this might sound in 2021).
        The following is a place where you can explore the world of shift_happens Yoga, take a deep dive into what brought me here or just follow along on this indeed life changing endeavour.
        There is also <Link href="/map"><a>the Map</a></Link> where you can visually interact with all the shifting events of my journey.
        As one of my best teachers used to say:
      </p>
      <div className='mt-4 mb-16'>
        <Quote text="Make your breath louder than your thoughts" />
      </div>
      <Timeline />
    </div>
  )
}

Yoga.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Yoga
