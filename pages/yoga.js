import Layout from '../components/Layout'

const Yoga = () => {
  return (
    <div className="pb-32 h-screen">
      <div className="flex flex-col items-center justify-center text-center text-3xl">
        <h1>Yoga</h1>
      </div>
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
