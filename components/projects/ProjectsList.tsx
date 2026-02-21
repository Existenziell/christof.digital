'use client'

import Image from 'next/image'
import TagList from '@/components/TagList'
import Link from 'next/link'
import type { Project } from '@/types/project'

interface ProjectsListProps {
  projects: Project[]
}

function ProjectCardContent({ project }: { project: Project }) {
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
      {projects.map((project) =>
        project.link ? (
          project.external ? (
            <a href={project.link} target='_blank' rel='noopener noreferrer nofollow' className='card card--link' aria-label={`Link to ${project.name}`}>
              <ProjectCardContent project={project} />
            </a>
          ) : (
            <Link href={project.link} className='card card--link' aria-label={`Link to ${project.name}`}>
              <ProjectCardContent project={project} />
            </Link>
          )
        ) : (
          <article key={project.name} className='card relative flex flex-col'>
            <ProjectCardContent project={project} />
          </article>
        )
      )}
    </div>
  )
}
