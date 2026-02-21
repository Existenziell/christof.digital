import { ChevronLeft, ChevronRight } from '@/components/Icons'
import type { PaginationProps } from '@/types'

export default function Pagination({ data, page, setPage }: PaginationProps) {
  const isDisabledPrev = page === 1
  const isDisabledNext = !data?.info?.next

  if (data?.error === 'There is nothing here') return <p className='mt-4'>No results found</p>

  return (
    <div className='flex justify-between items-center mt-4 mb-4 w-full'>
      <button type="button" onClick={() => setPage((oldPage) => oldPage - 1)} disabled={isDisabledPrev} className={isDisabledPrev ? 'opacity-0 w-8' : 'arrow-nav'}>
        <ChevronLeft />
      </button>
      {data?.info && (
        <div className='flex flex-col items-center'>
          <p>{data.info.count} results</p>
          <p>{page} / {data.info.pages}</p>
        </div>
      )}
      <button type="button" onClick={() => setPage((oldPage) => oldPage + 1)} disabled={isDisabledNext} className={isDisabledNext ? 'opacity-0 w-8' : 'arrow-nav'}>
        <ChevronRight />
      </button>
    </div>
  )
}
