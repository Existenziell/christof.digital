import { ChevronDoubleDown, ChevronDoubleRight } from '@/components/Icons'
import type { FiltersProps } from '@/types'

export default function Filters({ showFilter, setShowFilter, filterStatus, setFilterStatus, filterGender, setFilterGender }: FiltersProps) {
  const status = ['all', 'alive', 'dead', 'unknown']
  const gender = ['all', 'female', 'male', 'genderless', 'unknown']

  const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFilterStatus(value === 'all' ? '' : value)
  }

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFilterGender(value === 'all' ? '' : value)
  }

  return (
    <div className="my-2 w-full">
      <div className="flex items-center gap-1 hover:cursor-pointer mx-auto w-max hover:text-cta" onClick={() => setShowFilter(!showFilter)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setShowFilter(!showFilter)}>
        <h2>Filters</h2>
        {showFilter ? <ChevronDoubleDown className="w-4 h-4" /> : <ChevronDoubleRight className="w-4 h-4" />}
      </div>
      {showFilter && (
        <div className="card card--compact flex gap-4 justify-evenly">
          <fieldset>
            <legend>Status:</legend>
            <div className="flex flex-col md:flex-row items-start gap-1 md:gap-4">
              {status.map((s) => (
                <div key={s}>
                  <input type="radio" id={s} name="status" value={s} checked={filterStatus === '' ? s === 'all' : filterStatus === s} onChange={handleStatus} />
                  <label className="capitalize hover:cursor-pointer ml-[6px] text-sm" htmlFor={s}>{s}</label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Gender:</legend>
            <div className="flex flex-col md:flex-row items-start gap-1 md:gap-4">
              {gender.map((g) => (
                <div key={g}>
                  <input type="radio" id={`${g}_gender`} name="gender" value={g} checked={filterGender === '' ? g === 'all' : filterGender === g} onChange={handleGender} />
                  <label className="capitalize hover:cursor-pointer ml-[6px] text-sm" htmlFor={`${g}_gender`}>{g}</label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      )}
    </div>
  )
}
