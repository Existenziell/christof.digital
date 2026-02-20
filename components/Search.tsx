import { XMarkIcon } from '@heroicons/react/24/solid'

interface SearchProps {
  search: string
  setSearch: (v: string) => void
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
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
      <button type="button" onClick={() => setSearch('')} className='absolute right-2 text-brand-dark/20 dark:text-brand/20 hover:text-cta dark:hover:text-cta h-max' aria-label='Reset search'>
        <XMarkIcon className='w-5' />
      </button>
    </div>
  )
}
