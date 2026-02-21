import { Switch } from '@headlessui/react'
import type { SortingProps } from '@/types'

export default function Sorting({ sortBy, toggleSortBy }: SortingProps) {
  return (
    <Switch.Group>
      <div className="flex items-center text-sm">
        <Switch.Label className="mr-3">Newer</Switch.Label>
        <Switch
          aria-label='Switch Sorting'
          checked={sortBy}
          onChange={toggleSortBy}
          className="bg-surface border border-border relative inline-flex items-center h-6 rounded-sm w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface ring-primary"
        >
          <span className={`${sortBy ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-cta rounded-sm transition-transform`} />
        </Switch>
        <Switch.Label className="ml-3">Older</Switch.Label>
      </div>
    </Switch.Group>
  )
}
