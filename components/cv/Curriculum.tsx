'use client'

import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import Sorting from '@/components/Sorting'
import TagList from '@/components/TagList'
import Image from 'next/image'
import { useState } from 'react'
import { DownloadMarkdownIcon } from '@/components/Icons'
import { curriculum as cv } from '@/content/curriculum'
import { education } from '@/content/education'
import { useSortableData } from '@/hooks/useSortableData'

export default function Curriculum() {
  const { data, sortBy, toggleSortBy } = useSortableData(cv, false)
  const [view, setView] = useState('experiences')

  return (
    <div>
      <div className="w-full flex justify-center mb-8">
        <ul className="flex">
          <li className="mr-2">
            <a href="#experiences" onClick={() => setView('experiences')} className={`inline-block p-2 w-28 text-center ${view === 'experiences' ? 'active-tab' : ''}`}>Experiences</a>
          </li>
          <li className="mr-2">
            <a href="#education" onClick={() => setView('education')} className={`inline-block p-2 w-28 text-center ${view === 'education' ? 'active-tab' : ''}`}>Education</a>
          </li>
        </ul>
      </div>
      {view === 'experiences' && (
        <div className='w-full text-center'>
          <div className='flex items-center justify-between w-full lg:mx-auto'>
            <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />
            <a href="/curriculum.pdf" download="curriculum" className='flex items-center justify-center gap-1 text-xs hover:text-cta'>
              <DownloadMarkdownIcon className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>
          <ul className='flex flex-col space-y-8 justify-center items-start text-left w-full lg:mx-auto mt-2'>
            {data.map((job, index) => {
              const { title, company, companyUrl, companyType, date, duration, location, desc, latestProject, skills } = job
              return (
                <li key={index} className='card card--large w-full px-4 sm:px-8 pt-12 pb-8 relative text-sm leading-relaxed'>
                  <p className='card-date-badge'>{date}</p>
                  <p className='text-lg md:text-2xl mb-2 md:text-center'>{title}</p>
                  <p>Company:{' '}
                    {companyUrl ? (
                      <ExternalLink href={companyUrl} nofollow className='underline hover:text-cta hover:no-underline'>{company}</ExternalLink>
                    ) : (
                      <span>{company}</span>
                    )}
                  </p>
                  <p>{location}</p>
                  <p>{companyType}</p>
                  {duration && <p>Duration: <span>{duration}</span></p>}
                  <div className='overflow-hidden'>
                    {!!latestProject && (
                      <p>
                        <span>Last project:{' '}</span>
                        {latestProject.startsWith('http') ? (
                          <ExternalLink href={latestProject} nofollow className='underline hover:text-cta hover:no-underline'>{latestProject}</ExternalLink>
                        ) : (
                          <span>{latestProject}</span>
                        )}
                      </p>
                    )}
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: desc }} className='text-base my-4 border border-mauve-4 dark:border-mauve-8 text-primary rounded-sm px-6 py-4 max-w-full' />
                  <div className='flex items-center gap-2'>
                    <TagList items={skills} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {view === 'education' &&
        <div className='w-full'>
          {education.map((e, i) => {
            const { title, school, location, link, date, duration, image, certificates = [] } = e
            return (
              <div key={title} className='card card--large relative text-sm text-left mb-8'>
                <p className='card-date-badge'>{date}</p>
                <div className='flex gap-12 items-start pt-2'>
                  {image && (
                    <div className='flex-shrink-0'>
                      <Image src={image} width={100} height={100} alt={title} className={i === 0 ? 'invert dark:invert-0' : ''} />
                    </div>
                  )}
                  <div className='flex-1 min-w-0'>
                    <p className='text-2xl mb-6'>{title}</p>
                    <ExternalLink href={link} nofollow className='underline hover:text-cta hover:no-underline'>{school}</ExternalLink>
                    <p>{location}</p>
                    <p className='mb-4'>Duration: <span>{duration}</span></p>
                    {certificates.length > 0 &&
                      <>
                        <p className='font-bold mb-1 mt-4'>Additional Certificates:</p>
                        <ul className='leading-relaxed'>
                          {certificates.map((certificate, index) => (
                            <li key={index}>{certificate.name} ({certificate.date})</li>
                          ))}
                        </ul>
                      </>
                    }
                  </div>
                </div>
              </div>
            )
          })}
          <div className='card card--large-subtle relative text-sm text-left'>
            <p className='text-2xl mb-8 text-center'>Additional Certificates:</p>
            <ul className='leading-loose list-disc pl-6'>
              <li>Certified First Aider (2014/2016)</li>
              <li>Certified Fire Safety Assistant (2016)</li>
            </ul>
          </div>
        </div>
      }
      <Link href='/programming' className='button-sm mx-auto block mt-16'>Even more projects</Link>
    </div>
  )
}
