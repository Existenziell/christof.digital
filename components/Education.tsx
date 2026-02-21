import Image from 'next/image'
import { education } from '@/content/education'

export default function Education() {
  return (
    <div className='w-full'>
      {education.map((e, i) => {
        const { title, school, location, link, date, duration, image, addon, more } = e
        return (
          <div key={title} className='card card--large relative text-sm text-left dark:text-gray mb-8'>
            <p className='card-date-badge'>{date}</p>
            <p className='text-2xl mb-6 text-center pt-2'>{title}</p>
            <p className='mb-1'>School: <a href={link} target="_blank" rel="noreferrer nofollow" className='underline hover:text-cta hover:no-underline'>{school}</a></p>
            <p className='mb-1'>Location: <span>{location}</span></p>
            <p className='mb-4'>Duration: <span>{duration}</span></p>
            <div className='flex items-center justify-start gap-4 mt-8'>
              {image && (
                <div>
                  <Image src={image} width={100} height={100} alt={title} className={i === 0 ? 'invert dark:invert-0' : ''} />
                </div>
              )}
              <p dangerouslySetInnerHTML={{ __html: addon }} />
              {more && (
                <>
                  <span className='relative bottom-[1px]'>&rarr; </span>
                  <a href={more} target="_blank" rel="noreferrer nofollow" className='link text-sm'>More Information</a>
                </>
              )}
            </div>
          </div>
        )
      })}
      <div className='card card--large-subtle relative text-sm text-left dark:text-gray'>
        <p className='text-2xl mb-8 text-center'>Additional Certificates:</p>
        <ul className='leading-loose list-disc pl-6'>
          <li>Certified First Aider (2014/2016)</li>
          <li>Certified Fire Safety Assistant (2016)</li>
        </ul>
      </div>
    </div>
  )
}
