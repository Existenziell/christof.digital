import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/cn'

describe('cn()', () => {
  it('merges class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })
  it('filters out falsy values', () => {
    expect(cn('a', undefined, 'b', false, null, 'c')).toBe('a b c')
  })
  it('handles conditional classes', () => {
    expect(cn('base', true && 'active', false && 'hidden')).toBe('base active')
  })
  it('merges tailwind classes correctly (last wins)', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2')
  })
  it('returns empty string for no args', () => {
    expect(cn()).toBe('')
  })
})
