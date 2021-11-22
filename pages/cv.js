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
          const { title, company, companyUrl, companyType, date, duration, location, desc, latestProject, skills } = job
          return (
            <li key={index} className='w-full shadow hover:shadow-md px-4 sm:px-8 py-6 bg-white dark:bg-black text-sm'>
              <p className='text-xs mb-3 w-max ml-auto'>{date} ({duration})</p>
              <p className='text-xl mb-3 bg-brand text-white p-3 px-4 rounded-t-md text-center'>{title}</p>
              <p className='mb-1'>Company:{' '}
                {companyUrl
                  ? <Link href={companyUrl}><a target="_blank" rel='noopener noreferrer nofollow' className='link'>{company}</a></Link>
                  : <span>{company}</span>
                }
              </p>
              <p className='mb-1'>Location: <span>{location}</span></p>
              <p className='mb-4'>Type: <span>{companyType}</span></p>
              <p dangerouslySetInnerHTML={{ __html: desc }}
                className='text-base mb-4 bg-gray-100 rounded px-4 py-3 max-w-max dark:bg-gray-300 dark:text-black'>
              </p>
              <p className='mb-1'>
                <span>Skills/Tools:{' '}</span>
                {skills.join(", ")}
              </p>

              <div className='overflow-hidden'>
                {!!latestProject && (
                  <>
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
                  </>
                )}
              </div>

            </li>
          )
        })}
      </ul>

      <h2 className='text-xl mb-4 mt-16'>Education:</h2>
      <div className='w-full shadow hover:shadow-md p-8 bg-white text-sm text-left mb-8 lg:w-2/3 lg:mx-auto dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>2001 - 2006</p>
        <p className='text-xl mb-3 text-brand'>Master of Computer Science</p>
        <p className='mb-1'>School: <a href="https://www.h-ka.de/" target="_blank" rel="noreferrer nofollow" className='link'>Hochschule Karlsruhe - University of Applied Sciences (HKA)</a></p>
        <p className='mb-1'>Location: <span>Karlsruhe, Germany</span></p>
        <p className='mb-4'>Duration: <span>6 years</span></p>
        <p className='font-bold mb-1 mt-2'>
          Additional Certificates:
        </p>
        <ul className='leading-relaxed'>
          <li>Certificate in Business and Technical French (2003)</li>
          <li>Foundation Certificate in IT Service Management ITIL v3 (2007)</li>
          <li>Google Advertising Professional Certificate (2007)</li>
        </ul>
      </div>

      <div className='w-full shadow hover:shadow-md p-8 bg-white text-sm text-left mb-8 lg:w-2/3 lg:mx-auto dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>Jun 2018</p>
        <p className='text-xl mb-3 text-brand'>Yoga Instructor Certification - Level I</p>
        <p className='mb-1'>School: <a href="https://www.sammakaruna.org/" target="_blank" rel="noreferrer nofollow" className='link'> Samma Karuna Yoga School - Awakening &amp; Healing</a></p>
        <p className='mb-1'>Location: <span>Koh Phangan, Thailand</span></p>
        <p className='mb-4'>Duration: <span>4 weeks</span></p>
        <Image src="/icons/ryt-200.png" width={200} height={200} alt="Yoga Alliance Logo" />
        <a href="https://yoga.christof.digital/" target="_blank" rel="noreferrer nofollow" className='block mt-4 text-sm'>&rarr; More Information</a>
      </div>

      <div className='w-full shadow hover:shadow-md p-8 bg-white text-sm text-left lg:w-2/3 lg:mx-auto dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>Jun 2019</p>
        <p className='text-xl mb-3 text-brand'>Yoga Instructor Certification - Level II</p>
        <p className='mb-1'>School: <a href="http://www.ashtangayogamysore.net/" target="_blank" rel="noreferrer nofollow" className='link'>Ashtanga Yoga Mysore</a></p>
        <p className='mb-1'>Location: <span>Mysuru, Karnataka, India</span></p>
        <p className='mb-4'>Duration: <span>6 weeks</span></p>
        <Image src="/icons/ryt-500.png" width={200} height={200} alt="Yoga Alliance Logo" />
        <a href="https://yoga.christof.digital/" target="_blank" rel="noreferrer nofollow" className='block mt-4 text-sm'>&rarr; More Information</a>
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
