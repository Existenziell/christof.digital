'use client'

import Image from 'next/image'
import fetchApi from '@/lib/fetchApi'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import Link from 'next/link'
import Filters from '@/components/Filters'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { SyncLoader } from 'react-spinners'

interface ApiResponse {
  info?: { next?: string; count?: number; pages?: number }
  error?: string
  results?: Array<{
    id: number
    name: string
    image: string
    gender: string
    species: string
    type?: string
    origin: { name: string }
    location: { name: string }
    status: string
  }>
}

export default function Api() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [showFilter, setShowFilter] = useState(false)
  const [filterStatus, setFilterStatus] = useState('')
  const [filterGender, setFilterGender] = useState('')

  const { status, data } = useQuery({
    queryKey: ['characters', page, search, filterStatus, filterGender],
    queryFn: (): Promise<ApiResponse> =>
      fetchApi(
        search.length
          ? `https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${filterStatus}&gender=${filterGender}`
          : `https://rickandmortyapi.com/api/character?page=${page}&status=${filterStatus}&gender=${filterGender}`
      ) as Promise<ApiResponse>,
  })

  if (status === 'error') return <p>error</p>

  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='header'>API</h1>
      <p>Using react-query and the open Rick&amp;Morty API to test Pagination.</p>
      <Search search={search} setSearch={setSearch} />
      <Filters showFilter={showFilter} setShowFilter={setShowFilter} filterStatus={filterStatus} setFilterStatus={setFilterStatus} filterGender={filterGender} setFilterGender={setFilterGender} />
      <Pagination data={data} page={page} setPage={setPage} />
      {status === 'pending' ? (
        <div className='mx-auto w-max mt-16'><SyncLoader size={10} color='var(--color-cta)' /></div>
      ) : (
        <>
          {data?.error !== 'There is nothing here' && data?.results && (
            <>
              <div className='flex flex-wrap gap-6 justify-evenly items-center w-full md:pb-16 text-left'>
                {data.results.map((person) => (
                  <Link href={`/software-engineer/projects/api/${person.id}`} key={person.id} className='bg-gray dark:bg-gray-dark p-4 rounded-sm text-sm flex-grow max-w-[300px]'>
                    <h2 className='text-xl font-serif w-48 truncate' title={person.name}>{person.name}</h2>
                    <div className='nextimg my-4'>
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL={person.image}
                        className='rounded-sm'
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div>
                      <p className='w-48 truncate'>{person.gender}: {person.species} {person.type && <span title={person.type}>({person.type})</span>}</p>
                      <p className='w-48 truncate mb-2' title={person.origin.name}>Origin: {person.origin.name}</p>
                      <p className='w-48 truncate' title={person.location.name}>Location: {person.location.name}</p>
                      <p>Status: {person.status}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Pagination data={data} page={page} setPage={setPage} />
            </>
          )}
        </>
      )}
    </div>
  )
}
