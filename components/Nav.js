import { useRouter } from 'next/router'
import { useState } from 'react'

const Nav = () => {
  const links = [
    { name: 'Root', url: '/' },
    // { name: 'Coding', url: '/coding' },
    { name: 'Curriculum', url: '/cv' },
    { name: 'AI', url: '/ai' },
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
    <nav>
      {/* Mobile menu */}
      {isOpen &&
        <ul className='left-0 right-0 top-0 bottom-0 pt-20 z-10 bg-brand text-brand-dark dark:bg-brand-dark dark:text-brand relative h-screen'>
          {links.map(l => (
            <li key={l.name}>
              <a
                href={l.url}
                onClick={intercept}
                className={`${router.pathname === l.url && 'active-nav shadow-sm'} 
                                w-full block text-2xl md:text-4xl text-center leading-loose px-8 py-2 md:py-8 
                                hover:bg-brand-dark hover:text-highlight dark:hover:bg-brand transition-all`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      }

      {/* Mobile Hamburger Button */}
      <div className='absolute left-4 top-4 z-20'>
        <button className='outline-none' onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
          {!isOpen ?
            <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand-dark hover:text-brand-dark/70 dark:text-brand dark:hover:text-brand/70 transition-all' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
            :
            <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand-dark hover:text-brand-dark/70 dark:text-brand dark:hover:text-brand/70 transition-all' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          }
        </button>
      </div>
    </nav>
  )
}

export default Nav
