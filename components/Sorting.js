import { Switch } from '@headlessui/react'

const Sorting = ({ sortBy, toggleSortBy }) => {
  return (
    <div className='mx-auto w-max'>
      <Switch.Group>
        <div className="flex items-center text-sm">
          <Switch.Label className="mr-3">Oldest first</Switch.Label>
          <Switch
            checked={sortBy}
            onChange={toggleSortBy}
            className={`${sortBy ? 'bg-brand' : 'bg-gray-400'} 
            relative inline-flex items-center h-6 rounded-sm w-11 transition-colors 
            focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand-dark`}>
            <span
              className={`${sortBy ? 'translate-x-6' : 'translate-x-1'} 
              inline-block w-4 h-4 transform bg-white rounded-sm transition-transform`}
            />
          </Switch>
          <Switch.Label className="ml-3">Newest first</Switch.Label>
        </div>
      </Switch.Group>
    </div>
  )
}

export default Sorting
