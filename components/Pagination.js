import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Pagination = ({ data, page, setPage, status, setSearch }) => {
  const handleDecrement = () => {
    setSearch('')
    setPage(oldPage => oldPage - 1)
  }
  const handleIncrement = () => {
    setSearch('')
    setPage(oldPage => oldPage + 1)
  }

  return (
    <div className='flex justify-between items-center mt-4 mb-4'>
      <button onClick={handleDecrement} disabled={page === 1}>
        <ChevronLeftIcon className='w-8 h-8 hover:text-cta hover:bg-gray dark:hover:bg-gray-dark rounded' />
      </button>
      <div className='flex flex-col items-center'>
        <p className='text-xs'>({data?.info.count} total)</p>
        <p>{page} / {data?.info.pages}</p>
      </div>
      <button onClick={handleIncrement} disabled={!data?.info.next}>
        <ChevronRightIcon className='w-8 h-8 hover:text-cta hover:bg-gray dark:hover:bg-gray-dark rounded' />
      </button>
    </div>
  )
}

export default Pagination
