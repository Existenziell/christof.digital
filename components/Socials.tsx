import Image from 'next/image'
import { socialLinks } from '@/content/socialLinks'

export default function Socials() {
  return (
    <ul className='flex items-center justify-center gap-4'>
      {socialLinks.map((l) => {
        const { name, link, image } = l
        return (
          <li key={name}>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer nofollow'
              title={name}
              className='group relative block w-8 h-8 transition-all hover:text-cta'
            >
              <Image
                src={image}
                width={32}
                height={32}
                alt={name}
                className='relative z-10 transition-opacity group-hover:opacity-0 dark:invert'
              />
              <span
                className='absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-cta dark:bg-cta'
                style={{
                  maskImage: `url(${image})`,
                  WebkitMaskImage: `url(${image})`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
                aria-hidden
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
