import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = () => {

    const router = useRouter()
    const links = [
        { name: "Main", url: "/" },
        { name: "Coding", url: "/coding" },
        { name: "Curriculum", url: "/cv" },
        { name: "Yoga", url: "/yoga" },
        { name: "Map", url: "/map" },
        { name: "Contact", url: "/contact" },
    ]

    const toggleNav = (e) => {
        e.preventDefault()
        const menu = document.querySelector(".mobile-menu")
        menu.classList.toggle("hidden")
    }

    return (
        <>
            {/* Desktop menu */}
            <ul className="hidden md:flex justify-between items-center ml-4 w-max">
                {links.map((l) => {
                    return (
                        <li key={l.name} className='hover:bg-brand hover:text-white transition-all p-4'>
                            <Link href={l.url}>
                                <a className={`${router.pathname === l.url ? 'active-nav' : ''}`}>
                                    {l.name}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden justify-between my-3 ml-8 w-max space-x-6">
                <button className="outline-none mobile-menu-button" onClick={toggleNav} aria-label="Open Mobile Navigation">
                    <svg
                        className="w-8 h-8 hover:text-brand text-gray-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <ul className="hidden mobile-menu ml-8 mb-8">
                {links.map((l) => {
                    return (
                        <li key={l.name} className='block text-base px-2 py-2 hover:bg-brand hover:text-white transition duration-300'>
                            <Link href={l.url}>
                                <a className={`${router.pathname === l.url ? 'active-nav' : ''}`}>
                                    {l.name}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Nav
