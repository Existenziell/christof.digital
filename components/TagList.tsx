import type { TagListProps } from '@/types'

export default function TagList({ items }: TagListProps) {
  return (
    <ul className='flex flex-wrap items-start gap-1'>
      {items.map((item) => (
        <li key={item} className='bg-surface-muted text-muted p-2 rounded-xl px-3 py-1 text-xs'>
          {item}
        </li>
      ))}
    </ul>
  )
}
