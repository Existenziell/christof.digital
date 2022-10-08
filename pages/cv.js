import Link from 'next/link'
import Layout from '../components/Layout'
import { curriculum as cv } from '../lib/curriculum'
import { useState } from 'react'
import Education from '../components/Education'
import Sorting from '../components/Sorting'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const Curriculum = () => {
  const [sortBy, setSortBy] = useState('desc')
  const [data, setData] = useState(cv)

  const toggleSortBy = () => {
    setData(data.slice().reverse())
    setSortBy(!sortBy)
  }
  return (
    <div>
      <ScrollIndicator />

      <h1 className='text-4xl md:text-6xl mb-1'>Curriculum Vitae</h1>
      <p className='text-sm italic mb-8'>&bdquo;Resume of Life&rdquo;</p>
      {/* <div className='bg-white px-4 py-3 rounded mb-16 w-full md:w-1/2 mx-auto shadow dark:bg-gray-700'>This list tries to put all the different jobs/projects/places I was opportune to experience during my life so far in semantic and chronological context.</div> */}

      <div className='w-full text-center'>
        <h2 className='text-4xl mb-1'>Experiences:</h2>
        <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />
        <a href="cv.pdf" download="CV" className='flex items-center justify-center gap-1 text-xs w-max mx-auto mt-4'>
          <ArrowDownTrayIcon className='w-4' />
          <span>Download</span>
        </a>
        <ul className='flex flex-col space-y-8 justify-center items-start text-left w-full md:w-2/3 md:mx-auto mb-32 mt-12'>
          {data.map((job, index) => {
            const { title, company, companyUrl, companyType, date, duration, location, desc, latestProject, skills } = job

            return (
              <li key={index} className='w-full shadow hover:shadow-md px-4 sm:px-8 pt-6 pb-8 bg-white dark:bg-gray-dark dark:text-white text-sm rounded relative'>
                <p className={`absolute top-0 bg-gray dark:text-gray-dark p-2 right-0 rounded-bl-sm`}>{date}</p>

                <p className='text-2xl mb-3 p-3 px-4 text-center'>{title}</p>
                <p className='mb-1'>Company:{' '}
                  {companyUrl
                    ? <Link href={companyUrl}><a target='_blank' rel='noopener noreferrer nofollow' className='underline'>{company}</a></Link>
                    : <span>{company}</span>
                  }
                </p>
                <p className='mb-1'>Location: <span>{location}</span></p>
                <p className='mb-1'>Type: <span>{companyType}</span></p>
                <p className='mb-4'>Duration: <span>{duration}</span></p>
                <p dangerouslySetInnerHTML={{ __html: desc }} className='text-base mb-4 bg-gray dark:text-gray-dark rounded-sm px-8 py-6 max-w-max'></p>
                <p className='mb-1'>
                  <span>Skills/Tools:{' '}</span>
                  {skills.join(', ')}
                </p>

                <div className='overflow-hidden'>
                  {!!latestProject && (
                    <>
                      <span>Latest project:{' '}</span>
                      {latestProject.startsWith('http') ?
                        <Link href={latestProject}>
                          <a target='_blank' rel='noopener noreferrer nofollow' className='underline'>
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
      </div>
      <Education />
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
