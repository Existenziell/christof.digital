import { ChevronDoubleDownIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid"

const Filters = ({ showFilter, setShowFilter, filterStatus, setFilterStatus, filterGender, setFilterGender }) => {
  const status = ['all', 'alive', 'dead', 'unknown']
  const gender = ['all', 'female', 'male', 'genderless', 'unknown']

  const handleStatus = (e) => {
    const value = e.target.value
    value === 'all'
      ? setFilterStatus('')
      : setFilterStatus(value)
  }

  const handleGender = (e) => {
    const value = e.target.value
    value === 'all'
      ? setFilterGender('')
      : setFilterGender(value)
  }

  return (

    <div className="my-2 w-full">

      <div className="flex items-center gap-1 hover:cursor-pointer mx-auto w-max hover:text-cta" onClick={() => setShowFilter(!showFilter)}>
        <h2>Filters</h2>
        {showFilter ? <ChevronDoubleDownIcon className="w-4" /> : <ChevronDoubleRightIcon className="w-4" />}
      </div>

      {showFilter &&
        <div className="bg-gray dark:bg-gray-dark p-4 rounded-sm flex gap-4 justify-evenly">
          <fieldset onChange={handleStatus}>
            <legend>Status:</legend>
            <div className="flex flex-col md:flex-row items-start gap-1 md:gap-4">
              {status.map(s => (
                <div key={s}>
                  <input type="radio" id={s} name="status" value={s} defaultChecked={s === 'all'} />
                  <label className="capitalize hover:cursor-pointer ml-[6px] text-sm" htmlFor={s}>{s}</label>
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset onChange={handleGender} className=''>
            <legend>Gender:</legend>
            <div className="flex flex-col md:flex-row items-start gap-1 md:gap-4">
              {gender.map(g => (
                <div key={g}>
                  <input type="radio" id={g} name="gender" value={g} defaultChecked={g === 'all'} />
                  <label className="capitalize hover:cursor-pointer ml-[6px] text-sm" htmlFor={g}>{g}</label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      }
    </div>
  )
}

export default Filters
