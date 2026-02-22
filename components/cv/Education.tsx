import { education } from "@/content/education"
import ExternalLink from "../ExternalLink"
import Image from "next/image"

export default function Education() {
    return (
        <div className='w-full'>
            {education.map((e, i) => {
                const { title, school, location, link, date, duration, image, certificates = [] } = e
                return (
                    <div key={title} className='card card--large relative text-sm text-left mb-8'>
                        <p className='card-date-badge'>{date}</p>
                        <div className='flex gap-12 items-start pt-2'>
                            {image && (
                                <div className='flex-shrink-0'>
                                    <Image src={image} width={100} height={100} alt={title} className={i === 0 ? 'invert dark:invert-0' : ''} />
                                </div>
                            )}
                            <div className='flex-1 min-w-0'>
                                <p className='text-2xl mb-6'>{title}</p>
                                <ExternalLink href={link} nofollow className='underline hover:text-cta hover:no-underline'>{school}</ExternalLink>
                                <p>{location}</p>
                                <p className='mb-4'>Duration: <span>{duration}</span></p>
                                {certificates.length > 0 &&
                                    <>
                                        <p className='font-bold mb-1 mt-4'>Additional Certificates:</p>
                                        <ul className='leading-relaxed'>
                                            {certificates.map((certificate, index) => (
                                                <li key={index}>{certificate.name} ({certificate.date})</li>
                                            ))}
                                        </ul>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='card card--large-subtle relative text-sm text-left'>
                <p className='text-2xl mb-8 text-center'>Additional Certificates:</p>
                <ul className='leading-loose list-disc pl-6'>
                    <li>Certified First Aider (2014/2016)</li>
                    <li>Certified Fire Safety Assistant (2016)</li>
                </ul>
            </div>
        </div>
    )
}