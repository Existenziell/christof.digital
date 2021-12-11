import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full py-2 border-t static bottom-0 text-xs dark:bg-black dark:text-gray-300'>
      <Link href='/'><a><Image src='/icons/back.png' alt='Link Home' width={20} height={20} /></a></Link>
    </footer>
  )
}

export default Footer
