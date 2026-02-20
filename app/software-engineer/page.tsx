import { projects } from '@/content/projects'
import SortableProjectsList from '@/components/projects/SortableProjectsList'

export default function SoftwareEngineer() {
  return (
    <div className='w-full px-4 md:px-8'>
      <h1 className='header'>Software Engineer</h1>
      <p className='subtitle mx-auto max-w-xl text-center mb-12'>
        I have over 20 years of software development experience. Please see below a selection of my latest projects.
      </p>
      <SortableProjectsList projects={projects} />
    </div>
  )
}
