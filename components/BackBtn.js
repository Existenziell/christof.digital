import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const BackBtn = ({ link }) => (
  <Link href={link}>
    <a className="bg-gray dark:bg-gray-dark shadow hover:text-cta hover:shadow-none transition-all p-1 rounded-sm block">
      <ChevronLeftIcon className='w-6' />
    </a>
  </Link>
)

export default BackBtn
