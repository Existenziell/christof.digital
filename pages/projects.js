import Head from 'next/head'
import Image from 'next/image'
import ProjectLink from '../components/ProjectLink'
import AppLauncher from '../components/AppLauncher'
import TagList from '../components/TagList'
import { LinkIcon } from '@heroicons/react/24/solid'
import { projects } from '../lib/projects'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | christof.digital</title>
        <meta name='description' content="Projects | christof.digital" />
      </Head>

      <div className='w-full'>
        <h1 className='text-4xl md:text-6xl mb-4 text-center'>Projects</h1>
        <p className='mx-auto max-w-xl text-center mb-16'>I thoroughly enjoy working on these smaller projects, as a tech demo, a MVP or just to play around with a new technology. Here are a few examples:</p>

        <div className='w-full text-left flex flex-wrap justify-evenly items-start'>
          {projects.map(project => (
            <div key={project.name}
              className='w-full md:max-w-[calc(40vw)] lg:max-w-[calc(30vw)] p-4 mb-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-gray dark:bg-gray-dark text-brand-dark dark:text-brand rounded-sm'>

              <div className='flex justify-between w-full items-center mb-4'>
                <h2 className='text-2xl truncate' title={project.name}>{project.name}</h2>
                <ProjectLink href={project.link} external={project.external}>
                  <LinkIcon className='w-6 hover:text-cta' />
                </ProjectLink>
              </div>
              <p className='text-sm mb-2 h-16'>{project.desc}</p>
              <div className='nextimg mb-4'>
                <ProjectLink href={project.link} classes={'w-6 hover:text-cta'} external={project.external}>
                  <Image
                    src={`/projects/${project.image}`}
                    alt={project.name}
                    width={1000}
                    height={600}
                    placeholder="blur"
                    blurDataURL={`/projects/${project.image}`}
                  />
                </ProjectLink>
              </div>

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
