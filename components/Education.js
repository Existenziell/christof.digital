import Image from 'next/image'
import { education } from '../lib/education'

const Education = () => {
  return (
    <div className='w-full lg:w-2/3 lg:mx-auto'>

      {education.map((e, i) => {
        const { title, school, location, link, date, duration, image, addon, more } = e
        return (
          <div key={title} className='shadow-sm rounded p-8 relative text-sm text-left mb-8 bg-gray dark:bg-gray-dark dark:text-gray'>
            <p className={`absolute top-0 bg-gray-dark/20 dark:bg-gray/20 dark:text-gray px-2 py-1 right-0 rounded-bl rounded-tr`}>{date}</p>
            <p className='text-2xl mb-6 text-center pt-6'>{title}</p>
            <p className='mb-1'>School: <a href={link} target="_blank" rel="noreferrer nofollow" className='underline hover:text-cta hover:no-underline'>{school}</a></p>
            <p className='mb-1'>Location: <span>{location}</span></p>
            <p className='mb-4'>Duration: <span>{duration}</span></p>

            <div className='flex items-center justify-start gap-4 mt-8'>
              {image &&
                <div>
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={title}
                    className={i === 0 ? `invert dark:invert-0` : ``}
                  />
                </div>
              }
              <p dangerouslySetInnerHTML={{ __html: addon }}></p>
              {more &&
                <>
                  <span className='relative bottom-[1px]o'>&rarr; </span><a href={more} target="_blank" rel="noreferrer nofollow" className='link text-sm'>More Information</a>
                </>
              }
            </div>
          </div>
        )
      })}

      <div className='shadow-sm rounded p-8 relative text-sm text-left bg-gray dark:bg-gray-dark dark:text-gray'>
        <p className='text-2xl mb-8 text-center'>Additional Certificates:</p>
        <ul className=' leading-loose list-disc pl-6'>
          <li>Certificate in Business and Technical French (2003)</li>
          <li>Foundation Certificate in IT Service Management (2007)</li>
          <li>Google Advertising Professional Certificate (2007)</li>
          <li>Foundation Certificate in IT Service Management ITIL v3 (2014)</li>
          <li>Certified First Aider (2014/2016)</li>
          <li>Certified Fire Safety Assistant (2016)</li>
        </ul>
      </div>
    </div>
  )
}

export default Education
