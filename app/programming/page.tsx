import { projects } from '@/content/projects'
import ProjectsList from '@/components/projects/ProjectsList'

export default function Programming() {
  return (
    <div className='w-full'>
      <h1 className='header'>Programming</h1>
      <p className='intro-text--spacing-lg'>
        I have been working in software development for over 20 years and am still loving it. Below is a selection of some of my latest projects.
      </p>
      <ProjectsList projects={projects} />
    </div>
  )
}
