import Image from 'next/image'
import fetchApi from '../../../lib/fetchApi'
import { useQuery } from 'react-query'
import { SyncLoader } from 'react-spinners'
import BackBtn from '../../../components/BackBtn'
import { useRouter } from 'next/router'

const ApiDetail = () => {
  const router = useRouter()

  const { status, data: character } = useQuery(["character", router.query.id], () =>
    fetchApi(`https://rickandmortyapi.com/api/character/${router.query.id ? router.query.id : 1}`)
  )

  if (status === "error") return <p>{status}</p>

  return (
    <div className='text-left w-full'>

      {status === "loading" ?
        <div className='mx-auto w-max mt-16'><SyncLoader size={10} color='var(--color-cta)' /></div>
        :
        <>
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex items-center mb-4 gap-8'>
              <BackBtn link='/projects/api' />
              <h2 className='text-4xl font-serif inline-block'>{character.name}</h2>
            </div>
            <div className='nextimg relative my-2 shadow-xl mb-8'>
              <Image
                src={character.image}
                alt={character.name}
                width={500}
                height={500}
                className='rounded'
                placeholder="blur"
                blurDataURL={character.image}
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
      }
    </div>
  )
}

export default ApiDetail
