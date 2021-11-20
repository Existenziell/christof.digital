import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { curriculum as cv } from '../lib/curriculum'

const Curriculum = () => {

  return (
    <div className="pb-16 bg-cloth-pattern bg-repeat dark:bg-cloth-pattern-dark dark:text-gray-300">
      <h1 className='text-4xl mb-8'>Curriculum Vitae</h1>
      <h2 className='text-xl mb-4'>Experiences:</h2>

      <ul className='flex flex-col space-y-8 justify-center items-start w-full text-left lg:w-2/3 lg:mx-auto'>
        {cv.map((job, index) => {
          const { company, title, companyType, date, duration, location, desc, latestProject, skills } = job
          return (
            <li key={index} className='w-full shadow hover:shadow-md p-8 bg-white dark:bg-black text-sm'>
              <p className='text-xs mb-3 italic'>{date} ({duration})</p>
              <p className='text-xl mb-3 text-brand'>{title} @ {company}</p>
              <p className='mb-1'>Location: <span>{location}</span></p>
              <p className='mb-1'>Type: <span>{companyType}</span></p>
              <div className='mb-4'>
                <span>Latest project:{' '}</span>
                {latestProject.startsWith("http") ?
                  <Link href={latestProject}>
                    <a target="_blank" rel='noopener noreferrer nofollow' className='link'>
                      {latestProject}
                    </a>
                  </Link>
                  :
                  <span>{latestProject}</span>
                }
              </div>
              <p dangerouslySetInnerHTML={{ __html: desc }} className='text-base mb-4 bg-gray-100 rounded px-6 py-4 max-w-max dark:bg-gray-300 dark:text-black'></p>
              <p>
                <span>Skills/Tools:{' '}</span>
                {skills.join(", ")}
              </p>
            </li>
          )
        })}
      </ul>

      <h2 className='text-xl mb-4 mt-16'>Education:</h2>
      <div className='w-full shadow hover:shadow-md p-8 bg-white text-sm text-left mb-8 lg:w-2/3 lg:mx-auto dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>2001 - 2006</p>
        <p className='text-xl mb-3 text-brand'>Master of Computer Science</p>
        <p className='mb-1'>School: <a href="https://www.h-ka.de/" target="_blank" rel="noreferrer nofollow" className='link'>Hochschule Karlsruhe - Technik und Wirtschaft</a></p>
        <p className='mb-1'>Location: <span>Karlsruhe, Germany</span></p>
        <p className='mb-4'>Duration: <span>6 years</span></p>
        <ul>
          <li>Certificate in Business and Technical French (2003)</li>
          <li>Foundation Certificate in IT Service Management (2007)</li>
          <li>Google Advertising Professional Certificate (2007)</li>
        </ul>
      </div>

      <div className='w-full shadow hover:shadow-md p-8 bg-white text-sm text-left mb-8 lg:w-2/3 lg:mx-auto dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>Jun 2018</p>
        <p className='text-xl mb-3 text-brand'>Yoga Instructor Certification - Level I</p>
        <p className='mb-1'>School: <a href="https://www.sammakaruna.org/" target="_blank" rel="noreferrer nofollow" className='link'> Samma Karuna Yoga School - Awakening &amp; Healing</a></p>
        <p className='mb-1'>Location: <span>Koh Phangan, Thailand</span></p>
        <p className='mb-4'>Duration: <span>4 weeks</span></p>
        <Image src="/icons/ryt-200.png" width={100} height={100} alt="Yoga Alliance Logo" />
      </div>

      <div className='w-full shadow hover:shadow-md p-8 bg-white text-sm text-left lg:w-2/3 lg:mx-auto dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>Jun 2019</p>
        <p className='text-xl mb-3 text-brand'>Yoga Instructor Certification - Level II</p>
        <p className='mb-1'>School: <a href="http://www.ashtangayogamysore.net/" target="_blank" rel="noreferrer nofollow" className='link'>Ashtanga Yoga Mysore</a></p>
        <p className='mb-1'>Location: <span>Mysuru, Karnataka, India</span></p>
        <p className='mb-4'>Duration: <span>6 weeks</span></p>
        <Image src="/icons/ryt-500.png" width={100} height={100} alt="Yoga Alliance Logo" />
      </div>
    </div>
  )
}

Curriculum.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Curriculum
