import Link from 'next/link'
import Layout from '../components/Layout'
import { curriculum as cv } from '../lib/curriculum'
import { useState } from 'react'
import { useAppContext } from '../context/state'
import Education from '../components/Education'

const Curriculum = () => {
  const [cvData, setCvData] = useState(cv)
  const [sortingVisible, setSortingVisible] = useState(false)
  const { sorting, saveSorting } = useAppContext()

  const toggleOrder = (e) => {
    saveSorting(e.target.value)
    setCvData(cvData.reverse())
  }

  return (
    <div className="pb-16 bg-cloth-pattern bg-repeat dark:bg-cloth-pattern-dark dark:text-gray-200">
      <h1 className='text-4xl'>Curriculum Vitae</h1>
      <p className='text-sm italic mb-8'>&bdquo;Resume of Life&rdquo;</p>
      <div className='bg-white px-4 py-3 rounded mb-16 w-full md:w-1/2 mx-auto shadow dark:bg-gray-700'>This list tries to put all the different jobs/projects/places I was opportune to expierence during my life so far in semantic and chronological context.</div>

      <div className='w-full text-center'>
        <h2 className='text-2xl mb-1'>Experiences:</h2>

        {/* Sorting */}
        <div className='flex flex-col items-start w-24 mx-auto text-xs text-center py-1 mb-8'>
          <button onClick={() => setSortingVisible(!sortingVisible)} className='flex items-center gap-2 hover:text-brand'>
            <span className='font-bold'>Order by:</span>
            {sortingVisible ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
          </button>
          {sortingVisible &&
            <div className='flex flex-col mt-1 text-left gap-1'>
              <label htmlFor="desc" className='cursor-pointer flex items-center'>
                <input type="radio" id="desc" name="sorting" value="desc" defaultChecked={sorting === "desc"} onChange={toggleOrder} />
                <span className='align-text-bottom'>Newest first</span>
              </label>
              <label htmlFor="asc" className='cursor-pointer flex items-center'>
                <input type="radio" id="asc" name="sorting" value="asc" defaultChecked={sorting === "asc"} onChange={toggleOrder} />
                <span className='align-text-bottom'>Oldest first</span>
              </label>
            </div>
          }
        </div>
      </div>

      <ul className='flex flex-col space-y-8 justify-center items-start w-full text-left lg:w-2/3 lg:mx-auto mb-32'>
        {cv.map((job, index) => {
          const { title, company, companyUrl, companyType, date, duration, location, desc, latestProject, skills } = job
          return (
            <li key={index} className='w-full shadow hover:shadow-md px-4 sm:px-8 py-6 bg-white text-gray-200 text-sm bg-gradient-to-b from-primary to-secondary rounded'>
              <p className='text-xs mb-3 w-max ml-auto'>{date} ({duration})</p>
              <p className='text-2xl mb-3 text-white p-3 px-4 text-center'>{title}</p>
              <p className='mb-1'>Company:{' '}
                {companyUrl
                  ? <Link href={companyUrl}><a target="_blank" rel='noopener noreferrer nofollow' className='underline'>{company}</a></Link>
                  : <span>{company}</span>
                }
              </p>
              <p className='mb-1'>Location: <span>{location}</span></p>
              <p className='mb-4'>Type: <span>{companyType}</span></p>
              <p dangerouslySetInnerHTML={{ __html: desc }}
                className='text-base mb-4 bg-gray-100 text-gray-700 rounded px-4 py-3 max-w-max dark:bg-gray-300 dark:text-black'>
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
                        <a target="_blank" rel='noopener noreferrer nofollow' className='underline'>
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
