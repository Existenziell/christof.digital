import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { SyncLoader } from 'react-spinners'
import fetchApi from '../lib/fetchApi'
import Pagination from '../components/Pagination'
import Search from '../components/Search'

const Play = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { status, data } = useQuery(["characters", page, search], () =>
    fetchApi(`https://rickandmortyapi.com/api/character?page=${page}`),
    // { enabled: Boolean(search) }
  )

  if (data && search.length) {
    data.results = data.results.filter(res => (
      res.name.toLowerCase().includes(search.toLowerCase()) ||
      res.gender.toLowerCase().includes(search.toLowerCase()) ||
      res.status.toLowerCase().includes(search.toLowerCase()) ||
      res.species.toLowerCase().includes(search.toLowerCase()) ||
      res.type.toLowerCase().includes(search.toLowerCase()) ||
      res.origin.name.toLowerCase().includes(search.toLowerCase()) ||
      res.location.name.toLowerCase().includes(search.toLowerCase())
    ))
  }

  if (status === "error") return <p>{status}</p>

  return (
    <div className='text-left w-full'>
      <Link href='http://app.christof.digital'>
        <a className='fixed right-2 sm:right-0 bottom-0 block py-2 px-1 sm:p-2 text-sm transition-all bg-cta text-gray-dark hover:px-3'
          style={{ writingMode: 'vertical-rl' }}>
          Launch App
        </a>
      </Link>
      <h1 className='text-4xl md:text-6xl mb-3 text-center'>Playground</h1>
      <p className='text-sm text-center'>Using react-query and the open Rick&amp;Morty API to test Pagination.</p>

      <Search search={search} setSearch={setSearch} />
      <Pagination data={data} page={page} setPage={setPage} status={status} setSearch={setSearch} />

      {status === "loading" ?
        <div className='mx-auto w-max mt-16'><SyncLoader size={10} color='var(--color-cta)' /></div>
        :
        <>
          <div className='flex flex-wrap gap-4 justify-evenly items-center w-full md:pb-16'>
            {data?.results.map(person => {
              return (
                <div key={person.id} className='bg-gray dark:bg-gray-dark p-4 rounded-sm text-sm'>
                  <h2 className='text-xl font-serif w-48 truncate' title={person.name}>{person.name}</h2>
                  <div className='nextimg w-48 h-48 relative my-2'>
                    <Image src={person.image} alt={person.name} layout='fill' />
                  </div>
                  <div>
                    <p className='w-48 truncate'>{person.gender}: {person.species} <span title={person.type}>{person.type && `(${person.type})`}</span></p>
                    <p className='w-48 truncate' title={person.origin.name}>Origin: {person.origin.name}</p>
                    <p className='w-48 truncate' title={person.location.name}>Location: {person.location.name}</p>
                    <p>Status: {person.status}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <Pagination data={data} page={page} setPage={setPage} status={status} setSearch={setSearch} />
        </>
      }
    </div>
  )
}

export default Play
