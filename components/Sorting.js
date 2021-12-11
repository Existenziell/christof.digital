const Sorting = ({ sortBy, sortingVisible, setSortingVisible, toggleSortBy }) => {
  return (
    <div className='flex flex-col items-center max-w-max mx-auto text-xs text-center py-1 border border-gray-300 p-4'>
      <button onClick={() => setSortingVisible(!sortingVisible)} className='flex items-center gap-1 hover:text-brand'>
        <span className='font-bold'>Sort by</span>
        {sortingVisible ?
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
          :
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        }
      </button>
      {sortingVisible &&
        <div className='top-32 flex flex-col mt-1 text-left gap-1'>
          <label htmlFor='desc' className='cursor-pointer flex items-center'>
            <input type='radio' id='desc' name='sortBy' value='desc' checked={sortBy === 'desc'} onChange={toggleSortBy} />
            <span className='align-text-bottom'>Oldest first</span>
          </label>
          <label htmlFor='asc' className='cursor-pointer flex items-center'>
            <input type='radio' id='asc' name='sortBy' value='asc' checked={sortBy === 'asc'} onChange={toggleSortBy} />
            <span className='align-text-bottom'>Newest first</span>
          </label>
        </div>
      }
    </div>
  )
}

export default Sorting
