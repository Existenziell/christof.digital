import Head from 'next/head'
import Image from 'next/image'
import CleverLink from '../components/CleverLink'
import AppLauncher from '../components/AppLauncher'
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
        <p className='mx-auto max-w-xl text-center mb-16'>I thoroughly enjoy working on these smaller projects, as a tech demo, a MVP or just to play around with a new technology.</p>

        <div className='w-full text-left flex flex-wrap justify-evenly items-start'>
          {projects.map(project => (
            <div key={project.name} className='w-full md:max-w-[calc(40vw)] lg:max-w-[calc(30vw)] mb-8 bg-gray dark:bg-gray-dark p-4 text-brand-dark dark:text-brand rounded-sm'>

              <div className='flex justify-between w-full items-center mb-4'>
                <h2 className='text-2xl'>{project.name}</h2>
                <CleverLink href={project.link} external={project.external}>
                  <LinkIcon className='w-6 hover:text-cta' />
                </CleverLink>
              </div>
              <p className='text-sm mb-2 h-16'>{project.desc}</p>
              <div className='nextimg'>
                <CleverLink href={project.link} classes={'w-6 hover:text-cta'} external={project.external}>
                  <Image
                    src={`/projects/${project.image}`}
                    alt={project.name}
                    width={1000}
                    height={600}
                    layout="responsive"
                    objectFit="contain"
                  />
                </CleverLink>
              </div>
              <ul className='flex flex-wrap items-start gap-1 mt-4 h-12'>
                {project.tech.map(t => (
                  <li key={t} className='bg-gray-dark dark:bg-gray text-gray dark:text-gray-dark p-2 rounded-xl px-3 py-1 text-xs'>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <AppLauncher />
      </div>
    </>
  )
}

export default Projects
