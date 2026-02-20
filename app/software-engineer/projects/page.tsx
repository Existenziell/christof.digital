import { projects } from '@/lib/projects'
import SortableProjectsList from '@/components/projects/SortableProjectsList'

export default function Projects() {
  return (
    <div className='w-full'>
      <h1 className='header'>Projects</h1>
      <p className='subtitle mx-auto max-w-xl text-center mb-12'>I thoroughly enjoy working on these smaller projects, as a tech demo, a MVP or just to play around with a new technology. Here are a few examples:</p>
      <SortableProjectsList projects={projects} />
    </div>
  )
}
