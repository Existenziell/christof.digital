import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Nav = () => {
  const links = [
    { name: 'Root', url: '/' },
    { name: 'Curriculum', url: '/cv' },
    { name: 'Projects', url: '/projects' },
    // { name: 'AI', url: '/ai' },
    // { name: 'Playground', url: '/play' },
    { name: 'Contact', url: '/contact' },
  ]

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const intercept = (e) => {
    e.preventDefault()
    setIsOpen(false)
    router.push(e.target.href)
  }

  return (
    <nav className='w-full'>

      {/* Desktop Menu */}
      <ul className='hidden md:flex z-20 gap-1'>
        {links.map(l => {
          return (
            <li key={l.name}>
              <Link href={l.url}>
                <a className={`px-4 py-2 hover:bg-gray hover:text-cta dark:hover:bg-gray-dark transition-all ${router.pathname === l.url && 'active-nav'}`}>
                  {l.name}
                </a>
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
        <ul className='block md:hidden pt-20 z-10 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand h-screen'>
          {links.map(l => (
            <li key={l.name}>
              <a
                href={l.url}
                onClick={intercept}
                className={`${router.pathname === l.url && 'active-nav'} 
                                w-full block text-2xl md:text-4xl text-center leading-loose px-8 py-2 md:py-8 
                                hover:bg-brand-dark hover:text-cta dark:hover:bg-brand transition-all`}
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
