import Head from 'next/head'
import Image from 'next/image'
import ProjectLink from '../../components/ProjectLink'
import AppLauncher from '../../components/AppLauncher'
import TagList from '../../components/TagList'
import Sorting from '../../components/Sorting'
import { LinkIcon } from '@heroicons/react/24/solid'
import { projects } from '../../lib/projects'
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
        <h1 className='h1'>Projects</h1>
        <p className='mx-auto max-w-xl text-center mb-12'>I thoroughly enjoy working on these smaller projects, as a tech demo, a MVP or just to play around with a new technology. Here are a few examples:</p>
        <div className='flex items-center justify-center w-full'>
          <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />
        </div>
        <div className='w-full text-left grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8'>
          {data.map(project => (
            <div key={project.name}
              className='p-4 hover:scale-[102%] hover:shadow-2xl duration-500 bg-gray dark:bg-gray-dark text-brand-dark dark:text-brand rounded shadow transition-all'>

              <div className='flex justify-between items-center gap-2 w-full mb-4'>
                <h2 className='text-2xl truncate' title={project.name}>{project.name}</h2>
                <ProjectLink href={project.link} external={project.external}>
                  <LinkIcon className='w-6 hover:text-cta' />
                </ProjectLink>
              </div>

              <div className='nextimg mb-6'>
                <ProjectLink href={project.link} classes={'w-6 hover:text-cta'} external={project.external}>
                  <Image
                    src={`/projects/${project.image}`}
                    alt={project.name}
                    width={1000}
                    height={600}
                    placeholder="blur"
                    blurDataURL={`/projects/${project.image}`}
                    className='rounded'
                  />
                </ProjectLink>
              </div>

              <p className='text-sm mb-2'>{project.desc}</p>
              <TagList items={project.tech} />
            </div>
          ))}
        </div>

        <AppLauncher />
      </div>
    </>
  )
}

export default Projects
