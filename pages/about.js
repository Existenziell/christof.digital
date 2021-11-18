import Layout from '../components/Layout'
import Social from '../components/Social'

const About = () => {

  return (
    <div className='pb-32'>
      <div className="flex flex-col items-center justify-content text-center">
        <h1 className="text-4xl mb-8">About</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout title="About">
      {page}
    </Layout>
  )
}

export default About
