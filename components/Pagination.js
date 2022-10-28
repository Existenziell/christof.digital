import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Pagination = ({ data, page, setPage, status }) => {

  const isDisabledPrev = page === 1
  const isDisabledNext = !data?.info?.next

  return (
    <div className='flex justify-between items-center mt-4 mb-4 w-full'>
      <button
        onClick={() => setPage(oldPage => oldPage - 1)}
        disabled={isDisabledPrev}
        className={isDisabledPrev ? `opacity-0` : `arrow-nav`}
      >
        <ChevronLeftIcon />
      </button>
      <div className='flex flex-col items-center'>
        <p className='text-xs'>({data?.info.count} total)</p>
        <p>{page} / {data?.info.pages}</p>
      </div>
      <button
        onClick={() => setPage(oldPage => oldPage + 1)}
        disabled={isDisabledNext}
        className={isDisabledNext ? `opacity-0` : `arrow-nav`}
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}

export default Pagination
