'use client'

import Image from 'next/image'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import type { Project, ProjectsListProps } from '@/types'

function ProjectCardContent({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <>
      <div className='w-full md:max-w-md md:shrink-0'>
        <div className='relative aspect-video rounded overflow-hidden mb-4 md:mb-0'>
          <Image
            src={`/images/projects/${project.image}`}
            alt={project.name}
            fill
            sizes='(max-width: 768px) 100vw, min(400px, 40vw)'
            className='object-contain'
            priority={priority}
          />
        </div>
      </div>
      <div className='flex flex-col min-w-0 flex-1 justify-between'>
        <div>
          <h2 className='text-xl md:text-3xl mb-4'>{project.name}</h2>
          <p className='text-base mb-4'>{project.desc}</p>
        </div>
        <div>
          <div className='flex flex-col items-start gap-4'>
            {project.link &&
              (project.external ? (
                <ExternalLink href={project.link} nofollow className='button-ghost'>
                  {project.linkText}
                </ExternalLink>
              ) : (
                <Link href={project.link} className='button-ghost'>
                  {project.linkText}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <ul className='w-full text-left list-none p-0 grid grid-cols-1 gap-10 md:gap-12'>
      {projects.map((project, index) => (
        <li key={project.name}>
          <article className='card relative flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8'>
            <ProjectCardContent project={project} priority={index === 0} />
          </article>
        </li>
      ))}
    </ul>
  )
}
