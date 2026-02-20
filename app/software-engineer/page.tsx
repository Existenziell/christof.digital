import Link from 'next/link'

export default function SoftwareEngineer() {
  return (
    <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:w-2/3 lg:mx-auto'>
      <h1 className='header'>Software Engineer</h1>
      <p className='body-text mb-8'>
        I build and ship software. Here you can browse projects and try some playground tools.
      </p>
      <nav className='flex flex-wrap gap-4'>
        <Link href='/software-engineer/projects' className='link'>Projects</Link>
        <Link href='/software-engineer/playground' className='link'>Playground</Link>
      </nav>
    </div>
  )
}
