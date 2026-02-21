import type { Education } from '@/types'

export const education: Education[] = [
  {
    title: 'Master of Computer Science (Dipl. Inf.)',
    school: 'Hochschule Karlsruhe - University of Applied Sciences (HKA)',
    link: 'https://www.h-ka.de/',
    location: 'Karlsruhe, Germany',
    date: '2001 - 2006',
    duration: '6 years',
    image: '/icons/education/hka.svg',
    addon: `<p className='font-bold mb-1 mt-4'>Additional Certificates:</p><ul className='leading-relaxed'><li>Certificate in Business and Technical French (2003)</li><li>Foundation Certificate in IT Service Management ITIL v3 (2007)</li><li>Google Advertising Professional Certificate (2007)</li></ul>`,
  },
  {
    title: 'Yoga Instructor Certification - Level I',
    school: 'Samma Karuna Yoga School - Awakening & Healing',
    link: 'https://www.sammakaruna.org/',
    location: 'Koh Phangan, Thailand',
    date: 'June 2018',
    duration: '4 weeks',
    image: '/icons/education/ryt-200.png',
  },
  {
    title: 'Yoga Instructor Certification - Level II',
    school: 'Ashtanga Yoga Mysore',
    link: 'http://www.ashtangayogamysore.net/',
    location: 'Mysuru, Karnataka, India',
    date: 'June 2019',
    duration: '6 weeks',
    image: '/icons/education/ryt-500.png',
  },
]
