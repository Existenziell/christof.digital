import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface BackBtnProps {
  link: string
}

export default function BackBtn({ link }: BackBtnProps) {
  return (
    <Link href={link} className="bg-gray dark:bg-gray-dark shadow hover:text-cta hover:shadow-none transition-all p-1 rounded-sm block">
      <ChevronLeftIcon className='w-6' />
    </Link>
  )
}
