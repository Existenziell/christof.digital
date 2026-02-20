'use client'

import Image from 'next/image'
import ProjectLink from '@/components/ProjectLink'
import TagList from '@/components/TagList'
import Sorting from '@/components/Sorting'
import { LinkIcon } from '@heroicons/react/24/solid'
import { useSortedProjects } from '@/hooks/useSortedProjects'
import type { Project } from '@/content/projects'

interface SortableProjectsListProps {
  projects: Project[]
}

export default function SortableProjectsList({ projects }: SortableProjectsListProps) {
  const { data, isOlderFirst, toggleSort } = useSortedProjects(projects)

  return (
    <>
      <div className='flex items-center justify-center w-full'>
        <Sorting sortBy={isOlderFirst} toggleSortBy={toggleSort} />
      </div>
      <div className='w-full text-left grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8'>
        {data.map((project) => (
          <div key={project.name} className='p-4 hover:scale-[102%] hover:shadow-2xl duration-500 bg-gray dark:bg-gray-dark text-brand-dark dark:text-brand rounded shadow transition-all'>
            <div className='flex justify-between items-center gap-2 w-full mb-4'>
              <h2 className='text-2xl truncate' title={project.name}>{project.name}</h2>
              <ProjectLink href={project.link} external={project.external}>
                <LinkIcon className='w-6 hover:text-cta' />
              </ProjectLink>
            </div>
            <div className='nextimg mb-6'>
              <ProjectLink href={project.link} classes='block' external={project.external}>
                <Image
                  src={`/images/projects/${project.image}`}
                  alt={project.name}
                  width={1000}
                  height={600}
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='rounded'
                />
              </ProjectLink>
            </div>
            <p className='text-sm mb-2'>{project.desc}</p>
            <TagList items={project.tech} />
          </div>
        ))}
      </div>
    </>
  )
}
