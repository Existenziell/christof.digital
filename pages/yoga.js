import Layout from '../components/Layout'
import Quote from '../components/Quote'
import Timeline from '../components/Timeline'

const Yoga = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className='text-4xl mb-8'>Yoga</h1>
      <p className='mb-4'>A place where you can explore the world of shift_happens Yoga, take a deep dive into what brought me here, read about what former students and clients have to say about their experiences with shift_happens Yoga, find the right service I offer for you, interact visually with the Map of all shifting events of my journey or just follow along on this indeed life changing endeavour.</p>
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
