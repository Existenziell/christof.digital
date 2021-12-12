import Image from 'next/image'

const Education = () => {
  return (
    <>
      <h2 className='text-4xl mb-6'>Education:</h2>
      <div className='w-full shadow rounded  p-8 text-sm text-left mb-8 lg:w-2/3 lg:mx-auto bg-gradient-to-b from-primary to-secondary text-gray-200 dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>2001 - 2006</p>
        <p className='text-2xl mb-4 text-center'>Master of Computer Science</p>
        <p className='mb-1'>School: <a href="https://www.h-ka.de/" target="_blank" rel="noreferrer nofollow" className='underline'>Hochschule Karlsruhe - University of Applied Sciences (HKA)</a></p>
        <p className='mb-1'>Location: <span>Karlsruhe, Germany</span></p>
        <p className='mb-4'>Duration: <span>6 years</span></p>
        <p className='font-bold mb-1 mt-2'>
          Additional Certificates:
        </p>
        <ul className='leading-relaxed'>
          <li>Certificate in Business and Technical French (2003)</li>
          <li>Foundation Certificate in IT Service Management ITIL v3 (2007)</li>
          <li>Google Advertising Professional Certificate (2007)</li>
        </ul>
      </div>

      <div className='w-full shadow rounded p-8 text-sm text-left mb-8 lg:w-2/3 lg:mx-auto bg-gradient-to-b from-primary to-secondary text-gray-200 dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>Jun 2018</p>
        <p className='text-2xl mb-4 text-center'>Yoga Instructor Certification - Level I</p>
        <p className='mb-1'>School: <a href="https://www.sammakaruna.org/" target="_blank" rel="noreferrer nofollow" className='underline'> Samma Karuna Yoga School - Awakening &amp; Healing</a></p>
        <p className='mb-1'>Location: <span>Koh Phangan, Thailand</span></p>
        <p className='mb-4'>Duration: <span>4 weeks</span></p>
        <Image src="/icons/ryt-200.png" width={200} height={200} alt="Yoga Alliance Logo" />
        <a href="https://yoga.christof.digital/" target="_blank" rel="noreferrer nofollow" className='block mt-4 text-sm'>&rarr; More Information</a>
      </div>

      <div className='w-full shadow rounded p-8 text-sm text-left lg:w-2/3 lg:mx-auto bg-gradient-to-b from-primary to-secondary text-gray-200 dark:bg-black dark:text-gray-300'>
        <p className='text-xs mb-3 italic'>Jun 2019</p>
        <p className='text-2xl mb-4 text-center'>Yoga Instructor Certification - Level II</p>
        <p className='mb-1'>School: <a href="http://www.ashtangayogamysore.net/" target="_blank" rel="noreferrer nofollow" className='underline'>Ashtanga Yoga Mysore</a></p>
        <p className='mb-1'>Location: <span>Mysuru, Karnataka, India</span></p>
        <p className='mb-4'>Duration: <span>6 weeks</span></p>
        <Image src="/icons/ryt-500.png" width={200} height={200} alt="Yoga Alliance Logo" />
        <a href="https://yoga.christof.digital/" target="_blank" rel="noreferrer nofollow" className='block mt-4 text-sm'>&rarr; More Information</a>
      </div>
    </>
  )
}

export default Education
