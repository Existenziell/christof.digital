import Image from 'next/image'
import fetchApi from '../../../lib/fetchApi'
import Pagination from '../../../components/Pagination'
import Search from '../../../components/Search'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { SyncLoader } from 'react-spinners'
import Link from 'next/link'

const Api = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { status, data } = useQuery(["characters", page, search], () =>
    fetchApi(search.length
      ? `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
      : `https://rickandmortyapi.com/api/character?page=${page}`
    ),
    // { enabled: Boolean(search) }
  )

  if (status === "error") return <p>{status}</p>

  return (
    <div className='text-left w-full flex flex-col items-center'>
      <h1 className='h1'>API</h1>
      <p>Using react-query and the open Rick&amp;Morty API to test Pagination.</p>

      <Search search={search} setSearch={setSearch} />
      <Pagination data={data} page={page} setPage={setPage} status={status} />

      {status === "loading" ?
        <div className='mx-auto w-max mt-16'><SyncLoader size={10} color='var(--color-cta)' /></div>
        :
        <>
          <div className='flex flex-wrap gap-6 justify-evenly items-center w-full md:pb-16'>
            {data?.results?.map(person => {
              return (
                <Link href={`/projects/api/${person.id}`} key={person.id}>
                  <a className='bg-gray dark:bg-gray-dark p-4 rounded-sm text-sm flex-grow max-w-[300px]'>
                    <h2 className='text-xl font-serif w-48 truncate' title={person.name}>{person.name}</h2>
                    <div className='nextimg my-4'>
                      <Image
                        src={person.image}
                        alt={person.name}
                        layout='responsive'
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL={person.image}
                        className='rounded-sm'
                      />
                    </div>
                    <div>
                      <p className='w-48 truncate'>{person.gender}: {person.species} <span title={person.type}>{person.type && `(${person.type})`}</span></p>
                      <p className='w-48 truncate mb-2' title={person.origin.name}>Origin: {person.origin.name}</p>
                      <p className='w-48 truncate' title={person.location.name}>Location: {person.location.name}</p>
                      <p>Status: {person.status}</p>
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
          <Pagination data={data} page={page} setPage={setPage} status={status} setSearch={setSearch} />
        </>
      }
    </div>
  )
}

export default Api
