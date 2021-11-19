import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'

const Nav = () => {

    const router = useRouter()
    const links = [
        { name: "Main", url: "/" },
        { name: "Curriculum", url: "/cv" },
        { name: "Yoga", url: "/yoga" },
        { name: "Map", url: "/map" },
        { name: "Contact", url: "/contact" },
    ]

    useEffect(() => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }, [])


    return (
        <>
            {/* Desktop menu */}
            <ul className="hidden md:flex justify-between my-4 ml-8 w-max space-x-6">
                {links.map((l) => {
                    return (
                        <li key={l.name}>
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
            <div class="flex md:hidden justify-between my-3 ml-8 w-max space-x-6">
                <button class="outline-none mobile-menu-button">
                    <svg
                        class="w-8 h-8 hover:text-brand text-gray-500"
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <ul class="hidden mobile-menu ml-8 mb-8">
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
