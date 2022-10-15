const TagList = ({ items }) => {
  return (
    <ul className='flex flex-wrap items-start gap-1'>
      {items.map(item => (
        <li key={item} className='bg-gray-dark/20 dark:bg-gray/20 text-gray-dark dark:text-gray p-2 rounded-xl px-3 py-1 text-xs'>
          {item}
        </li>
      ))}
    </ul>
  )
}
export default TagList
