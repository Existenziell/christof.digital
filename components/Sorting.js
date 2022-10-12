import { Switch } from '@headlessui/react'

const Sorting = ({ sortBy, toggleSortBy }) => {
  return (
    <Switch.Group>
      <div className="flex items-center text-sm">
        <Switch.Label className="mr-3">Older</Switch.Label>
        <Switch
          aria-label='Switch Sorting'
          checked={sortBy}
          onChange={toggleSortBy}
          className={`bg-gray-dark dark:bg-gray 
            relative inline-flex items-center h-6 rounded-sm w-11 transition-colors 
            focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand-dark`}>
          <span
            className={`${sortBy ? 'translate-x-6' : 'translate-x-1'} 
              inline-block w-4 h-4 transform bg-cta rounded-sm transition-transform`}
          />
        </Switch>
        <Switch.Label className="ml-3">Newer</Switch.Label>
      </div>
    </Switch.Group>
  )
}

export default Sorting
