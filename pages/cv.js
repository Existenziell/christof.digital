import Link from 'next/link'
import Head from 'next/head'
import Education from '../components/Education'
import Sorting from '../components/Sorting'
import { useState } from 'react'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { curriculum as cv } from '../lib/curriculum'

const Curriculum = () => {
  const [sortBy, setSortBy] = useState('desc')
  const [data, setData] = useState(cv)
  const [view, setView] = useState('experiences')

  const toggleSortBy = () => {
    setData(data.slice().reverse())
    setSortBy(!sortBy)
  }
  return (
    <>
      <Head>
        <title>Curriculum Vitae | christof.digital</title>
        <meta name='description' content="Curriculum Vitae | christof.digital" />
      </Head>

      <div>
        <ScrollIndicator />
        <h1 className='text-4xl md:text-6xl mb-1'>Curriculum Vitae</h1>
        <p className='text-sm italic mb-8'>&bdquo;Resume of Life&rdquo;</p>

        <div className="w-full flex justify-center mb-8">
          <ul className="flex">
            <li className="mr-2">
              <a href="#experiences" onClick={() => setView('experiences')}
                className={`inline-block p-4 ${view === 'experiences' && `active-tab`}`}>Experiences</a>
            </li>
            <li className="mr-2">
              <a href="#education" onClick={() => setView('education')}
                className={`inline-block p-4 ${view === 'education' && `active-tab`}`}>Education</a>
            </li>
          </ul>
        </div>

        {view === 'experiences' &&
          <div className='w-full text-center'>
            <h2 className='text-4xl mb-2'>Experiences</h2>

            <div className='flex items-center justify-between w-full md:w-2/3 md:mx-auto'>
              <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />
              <a href="curriculum.pdf" download="curriculum" className='flex items-center justify-center gap-1 text-xs hover:text-highlight'>
                <ArrowDownTrayIcon className='w-4' />
                <span>Download</span>
              </a>
            </div>

            <ul className='flex flex-col space-y-8 justify-center items-start text-left w-full md:w-2/3 md:mx-auto mb-32 mt-2'>
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
        }
        {view === 'education' &&
          <Education />
        }
      </div>
    </>
  )
}

export default Curriculum
