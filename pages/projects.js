import Head from 'next/head'
import Image from 'next/image'
import ProjectLink from '../components/ProjectLink'
import AppLauncher from '../components/AppLauncher'
import TagList from '../components/TagList'
import Sorting from '../components/Sorting'
import { LinkIcon } from '@heroicons/react/24/solid'
import { projects } from '../lib/projects'
import { useState } from 'react'

const Projects = () => {
  const [sortBy, setSortBy] = useState('desc')
  const [data, setData] = useState(projects)

  const toggleSortBy = () => {
    setData(data.slice().reverse())
    setSortBy(!sortBy)
  }

  return (
    <>
      <Head>
        <title>Projects | christof.digital</title>
        <meta name='description' content="Projects | christof.digital" />
      </Head>

      <div className='w-full'>
        <h1 className='text-4xl md:text-6xl mb-4 text-center'>Projects</h1>
        <p className='mx-auto max-w-xl text-center mb-16'>I thoroughly enjoy working on these smaller projects, as a tech demo, a MVP or just to play around with a new technology. Here are a few examples:</p>
        <div className='flex items-center justify-center w-full'>
          <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />
        </div>
        <div className='w-full text-left flex flex-wrap justify-evenly items-start mt-6 gap-4'>
          {data.map(project => (
            <div key={project.name}
              className='flex flex-col md:flex-row gap-8 w-full p-4 mb-8 bg-gray dark:bg-gray-dark text-brand-dark dark:text-brand rounded'>

              <div className='nextimg md:mb-4 hover:scale-105 hover:shadow-2xl transition-all duration-500'>
                <ProjectLink href={project.link} classes={'w-6 hover:text-cta'} external={project.external}>
                  <Image
                    src={`/projects/${project.image}`}
                    alt={project.name}
                    width={1000}
                    height={600}
                    placeholder="blur"
                    blurDataURL={`/projects/${project.image}`}
                    className=''
                  />
                </ProjectLink>
              </div>
              <div className='flex flex-col justify-between w-full items-start md:mb-4'>

                <div className='mb-8 md:mb-0'>
                  <div className='flex justify-between items-center w-full'>
                    <h2 className='text-2xl truncate' title={project.name}>{project.name}</h2>
                    <ProjectLink href={project.link} external={project.external}>
                      <LinkIcon className='w-6 hover:text-cta' />
                    </ProjectLink>
                  </div>
                  <p className='text-sm mt-2 md:mt-8'>{project.desc}</p>
                </div>
                <TagList items={project.tech} />

              </div>
            </div>
          ))}
        </div>

        <AppLauncher />
      </div>
    </>
  )
}

export default Projects
