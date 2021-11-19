import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = () => {

    const router = useRouter()
    const links = [
        { name: "Main", url: "/" },
        { name: "Contact", url: "/contact" },
        { name: "Yoga", url: "/yoga" },
        { name: "Map", url: "/map" },
    ]

    return (
        <ul className="flex justify-between my-4 ml-8 w-max space-x-6">
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
    )
}

export default Nav
