import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface BackBtnProps {
  link: string
}

export default function BackBtn({ link }: BackBtnProps) {
  return (
    <Link href={link} className="card--minimal">
      <ChevronLeftIcon className='w-6' />
    </Link>
  )
}
