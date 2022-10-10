import Image from 'next/image'
import { SyncLoader } from 'react-spinners'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Pagination = ({ data, page, setPage, status }) => {
  if (status === "loading") return <div className='mx-auto w-max mt-32'><SyncLoader size={10} color='var(--color-cta)' /></div>
  if (status === "error") return <p>{status}</p>

  return (
    <>
      <div className='flex justify-between items-center mt-8 mb-4'>
        <button onClick={() => setPage(oldPage => oldPage - 1)} disabled={page === 1}>
          <ChevronLeftIcon className='w-8 h-8 hover:text-cta hover:bg-gray dark:hover:bg-gray-dark rounded' />
        </button>
        {page} / {data.info.pages}
        <button onClick={() => setPage(oldPage => oldPage + 1)} disabled={!data.info.next}>
          <ChevronRightIcon className='w-8 h-8 hover:text-cta hover:bg-gray dark:hover:bg-gray-dark rounded' />
        </button>
      </div>

      <div className='flex flex-wrap gap-4 justify-evenly items-center w-full md:pb-16'>
        {data.results.map(person => {
          return (
            <div key={person.id} className='bg-gray dark:bg-gray-dark p-4 rounded-sm text-sm'>
              <h2 className='text-xl font-serif w-48 truncate' title={person.name}>{person.name}</h2>
              <div className='nextimg w-48 h-48 relative my-2'>
                <Image src={person.image} alt={person.name} layout='fill' />
              </div>
              <div>
                <p>{person.gender}: {person.species}</p>
                <p className='w-48 truncate' title={person.origin.name}>Origin: {person.origin.name}</p>
                <p className='w-48 truncate' title={person.location.name}>Location: {person.location.name}</p>
                <p>Status: {person.status}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Pagination
