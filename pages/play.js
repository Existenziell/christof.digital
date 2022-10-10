import Link from 'next/link'
import { useQuery } from 'react-query'
import { useState } from 'react'
import fetchApi from '../lib/fetchApi'
import Pagination from '../components/Pagination'

const Play = () => {
  const [page, setPage] = useState(1)
  const { status, data } = useQuery(["characters", page], () =>
    fetchApi(`https://rickandmortyapi.com/api/character?page=${page}`)
  )

  return (
    <div className='text-left w-full'>
      <Link href='http://app.christof.digital'>
        <a className='fixed right-2 sm:right-0 bottom-0 block py-2 px-1 sm:p-2 text-sm transition-all bg-cta text-gray-dark hover:px-3'
          style={{ writingMode: 'vertical-rl' }}>
          Launch App
        </a>
      </Link>
      <h1 className='text-4xl lg:text-6xl mb-3 text-center'>Playground</h1>
      <p className='text-sm text-center'>Using react-query and the open Rick&amp;Morty API to test Pagination.</p>
      <Pagination data={data} page={page} setPage={setPage} status={status} />
    </div >
  )
}

export default Play
