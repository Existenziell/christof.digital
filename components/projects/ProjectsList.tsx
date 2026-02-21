'use client'

import Image from 'next/image'
import TagList from '@/components/TagList'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import type { Project, ProjectsListProps } from '@/types'

function ProjectCardContent({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <>
      <h2 className='text-2xl truncate mb-4' title={project.name}>{project.name}</h2>
      <div className='block mb-6'>
        <Image
          src={`/images/projects/${project.image}`}
          alt={project.name}
          width={1000}
          height={600}
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='rounded block'
          priority={priority}
        />
      </div>
      <p className='text-sm mb-2'>{project.desc}</p>
      <TagList items={project.tech} />
    </>
  )
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className='w-full text-left grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project, index) =>
        project.link ? (
          project.external ? (
            <ExternalLink key={project.name} href={project.link} nofollow className='card card--link' aria-label={`Link to ${project.name}`}>
              <ProjectCardContent project={project} priority={index === 0} />
            </ExternalLink>
          ) : (
            <Link key={project.name} href={project.link} className='card card--link' aria-label={`Link to ${project.name}`}>
              <ProjectCardContent project={project} priority={index === 0} />
            </Link>
          )
        ) : (
          <article key={project.name} className='card relative flex flex-col'>
            <ProjectCardContent project={project} priority={index === 0} />
          </article>
        )
      )}
    </div>
  )
}
