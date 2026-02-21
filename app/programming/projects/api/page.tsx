'use client'

import Image from 'next/image'
import fetchApi from '@/lib/fetchApi'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import Filters from '@/components/Filters'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { SyncLoader } from 'react-spinners'
import { XIcon } from '@/components/Icons'
import type { ApiResponse } from '@/types/api'

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

  if (status === 'error') {
    return (
      <div className="w-full flex flex-col items-center gap-4">
        <p className="body-text">Something went wrong loading the API data.</p>
        <Link href="/programming/projects/api" className="button-sm">
          Try again
        </Link>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='header'>API</h1>
      <p>Using react-query and the open Rick&amp;Morty API to test Pagination.</p>
      <div className='search relative w-max flex items-center justify-center mx-auto mt-8'>
        <input
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name='search'
          placeholder='Search'
          autoComplete='off'
          autoCorrect='off'
          spellCheck={false}
        />
        <button type="button" onClick={() => setSearch('')} className='absolute right-2 text-muted hover:text-cta h-max' aria-label='Reset search'>
          <XIcon className="w-5 h-5" />
        </button>
      </div>
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
                  <Link href={`/programming/projects/api/${person.id}`} key={person.id} className='card card--compact text-sm flex-grow max-w-[300px]'>
                    <h2 className='text-xl font-serif w-48 truncate' title={person.name}>{person.name}</h2>
                    <div className='block my-4'>
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL={person.image}
                        className='rounded-sm block'
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
