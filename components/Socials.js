import Image from 'next/image'
import { socialLinks } from '../lib/socialLinks'

const Socials = () => {
  return (
    <div className='dark:bg-gray-300 rounded pt-2 px-4'>
      <ul className='flex items-center justify-center gap-4'>
        {socialLinks.map(l => {
          const { name, link, image } = l
          return (
            <li className='border-b-2 border-transparent hover:border-b-2 hover:border-brand-dark dark:hover:border-brand transition-all' key={name}>
              <a href={link} target='_blank' rel='noopener noreferrer nofollow' title={name}>
                <Image
                  src={image}
                  width={32}
                  height={32}
                  alt={name}
                  className='dark:invert'
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Socials
