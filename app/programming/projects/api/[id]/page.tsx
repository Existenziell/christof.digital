'use client'

import Image from 'next/image'
import fetchApi from '@/lib/fetchApi'
import { useQuery } from '@tanstack/react-query'
import { SyncLoader } from 'react-spinners'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from '@/components/Icons'
import type { Character } from '@/types'

export default function ApiDetail() {
  const params = useParams()
  const id = (params?.id as string) || '1'

  const { status, data: character } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchApi(`https://rickandmortyapi.com/api/character/${id}`) as Promise<Character>,
  })

  if (status === 'error') {
    return (
      <div className="w-full flex flex-col items-center gap-4">
        <p className="body-text">Something went wrong loading this character.</p>
        <Link href="/programming/projects/api" className="button-sm">
          Back to API
        </Link>
      </div>
    )
  }

  return (
    <div className='text-left w-full'>
      {status === 'pending' ? (
        <div className='mx-auto w-max mt-16'><SyncLoader size={10} color='var(--color-cta)' /></div>
      ) : character ? (
        <>
          <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex items-center mb-4 gap-8'>
              <Link href='/programming/projects/api' className="card--minimal">
                <ChevronLeft className="w-6 h-6" />
              </Link>
              <h2 className='text-4xl font-serif inline-block'>{character.name}</h2>
            </div>
            <div className='block relative my-2 shadow-xl mb-8'>
              <Image
                src={character.image}
                alt={character.name}
                width={500}
                height={500}
                className='rounded block'
              />
            </div>
            <div>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              {character.type && <p>Type: {character.type}</p>}
              <p className='mt-4'>Origin: {character.origin.name}</p>
              <p>Location: {character.location.name}</p>
              <p className='mt-4'>Status: {character.status}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
