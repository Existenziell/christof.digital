import Layout from '../components/Layout'

const Success = () => {
  return (
    <div className="pb-32 h-screen">
      <div className="flex flex-col items-center justify-center text-center text-3xl text-brand h-full">
        <h1>Thank you!</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-brand " viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}

Success.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Success
