import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

const Nav = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const projects = ['/projects/ai', '/projects/api', '/projects/recording']
  const urlIsProject = projects.includes(router.pathname)

  const links = [
    { name: 'Root', url: '/', active: router.pathname === '/' },
    { name: 'Curriculum', url: '/cv', active: router.pathname === '/cv' },
    { name: 'Projects', url: '/projects', active: router.pathname === '/projects' || urlIsProject },
    { name: 'Playground', url: '/playground', active: router.pathname === '/playground' },
    { name: 'Contact', url: '/contact', active: router.pathname === '/contact' },
  ]

  useEffect(() => {
    gsap.fromTo("#nav", { opacity: 0 }, { opacity: 1, delay: 0.5 })
  }, [])

  return (
    <nav className='w-full' id='nav'>

      {/* Desktop Menu */}
      <ul className='desktop-nav hidden md:flex z-20 gap-2'>
        {links.map(l => {
          return (
            <li key={l.name} className={(l.active) ? 'active-nav' : 'nav'}>
              <Link href={l.url}>
                <a className='px-4 py-2 block'>{`// ${l.name}`}</a>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile Hamburger Button */}
      <div className='block md:hidden z-20'>
        <button className='outline-none' onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
          {!isOpen ?
            <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
            :
            <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen &&
        <ul className='mobile-nav absolute left-0 right-0 w-full md:hidden pt-20 z-10 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand h-screen'>
          {links.map(l => (
            <li key={l.name}>
              <a
                href={l.url}
                onClick={(e) => setIsOpen(false) && router.push(e.target.href)}
                className={l.active ? 'active-nav' : 'nav'}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      }
    </nav>
  )
}

export default Nav
