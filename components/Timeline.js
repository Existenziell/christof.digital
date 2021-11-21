import Image from 'next/image'
import Link from 'next/link'
import { timeline } from '../lib/timeline'

const Timeline = () => {

  return (
    <section className='timeline bg-cloth-pattern bg-repeat dark:bg-cloth-pattern-dark'>
      <h2 className='text-3xl mb-2'>The Timeline</h2>
      <p className='mb-16'>Join me on the journey, as Yoga became part of me.</p>

      <ul className='text-left w-full'>
        {timeline.features.map((feature, index) => {
          const { id, image, date, name, subname, description, mapOnly } = feature.properties
          if (!mapOnly) {
            return (
              <li key={index} className={`shadow-xl mb-16 bg-white sm:w-4/5 relative rounded-md ${index % 2 === 0 && `ml-auto`} dark:bg-black dark:text-gray-300`}>
                <div>
                  <Image
                    src={`/timeline/${image}.jpg`}
                    width={800}
                    height={450}
                    layout={"responsive"}
                    alt={name}
                  />
                </div>
                <div className={`absolute top-0 text-white bg-black p-2 ${index % 2 === 0 ? `right-0` : `left-0`}`}>{date}</div>
                <div className="p-4">
                  <h3 className='text-2xl text-brand'>{name}</h3>
                  <h4 className='text-sm mb-6'>{subname}</h4>
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
              </li>
            )
          }

        })}
      </ul>

      <div className='flex flex-col items-center justify-center text-center'>
        <h1>Congratulations, you made it all the way here!</h1>
        <h2>I hope you enjoyed the ride :)</h2>
        <a href="#top" aria-label="Scroll back up">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-black hover:text-brand " viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

    </section>
  )
}

export default Timeline
