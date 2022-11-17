import Link from 'next/link'
import { gsap } from 'gsap'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const projects = ['/projects/ai', '/projects/api', '/projects/recording', '/projects/threejs']
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
        <div onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
          {!isOpen ?
            <Bars4Icon className='h-12 w-12 p-0 m-0 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' />
            :
            <XMarkIcon className='h-12 w-12 p-0 m-0 text-brand-dark hover:text-cta dark:text-brand dark:hover:text-cta transition-all' />
          }
        </div>
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
