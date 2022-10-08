import Image from 'next/image'
import { education } from '../lib/education'

const Education = () => {
  return (
    <div className='w-full md:w-2/3 md:mx-auto'>
      <h2 className='text-4xl mb-6'>Education:</h2>

      {education.map((e, i) => {
        const { title, school, location, link, date, duration, image, addon } = e
        return (
          <div key={title} className='shadow-sm rounded p-8 relative text-sm text-left mb-8 bg-white dark:bg-gray-dark dark:text-white'>
            <p className={`absolute top-0 bg-gray dark:text-gray-dark p-2 right-0 rounded-bl-sm`}>{date}</p>
            <p className='text-2xl mb-8 text-center'>{title}</p>
            <p className='mb-1'>School: <a href={link} target="_blank" rel="noreferrer nofollow" className='underline'>{school}</a></p>
            <p className='mb-1'>Location: <span>{location}</span></p>
            <p className='mb-4'>Duration: <span>{duration}</span></p>

            <div className='flex items-center justify-start gap-4 mt-8'>
              {image &&
                <div>
                  <Image src={image} width={100} height={100} alt={title} className={i === 0 ? `invert dark:invert-0` : ``} />
                </div>
              }
              <p dangerouslySetInnerHTML={{ __html: addon }}></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Education
