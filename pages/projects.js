import { LinkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../lib/projects'

const Projects = () => {
  return (
    <div className='w-full'>
      <h1 className='text-4xl lg:text-6xl mb-4 text-center'>Projects</h1>
      <p className='mx-auto max-w-xl text-center mb-16'>I thoroughly enjoy working on these smaller projects, as a tech demo, a MVP or just to play around with a new technology.</p>

      <div className='w-full text-left flex flex-wrap justify-evenly items-start gap-8'>
        {projects.map(project => (
          <div key={project.name} className='md:max-w-[calc(30vw)] bg-gray dark:bg-gray-dark p-4 text-brand-dark dark:text-brand rounded-sm'>

            <div className='flex justify-between w-full items-center mb-4'>
              <h2 className='text-2xl'>{project.name}</h2>
              <a href={project.link} target='_blank' rel='noopener noreferrer nofollow'>
                <LinkIcon className='w-6 hover:text-cta' />
              </a>
            </div>
            <p className='text-sm mb-2'>{project.desc}</p>
            <div className='nextimg'>
              <Image
                src={`/projects/${project.image}`}
                alt={project.name}
                width={1000}
                height={600}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <ul className='flex flex-wrap gap-2 my-4'>
              {project.tech.map(t => (
                <li key={t} className='bg-gray-dark dark:bg-gray text-gray dark:text-gray-dark p-2 rounded-full px-3 py-1 text-xs'>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link href='http://app.christof.digital'>
        <a className='fixed right-2 sm:right-0 bottom-0 block py-2 px-1 sm:p-2 text-sm transition-all bg-cta text-gray-dark hover:px-3'
          style={{ writingMode: 'vertical-rl' }}>
          Launch App
        </a>
      </Link>
    </div>
  )
}

export default Projects
