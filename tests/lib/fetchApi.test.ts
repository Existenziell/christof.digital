import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import fetchApi from '@/lib/fetchApi'

describe('fetchApi()', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn((url: string) =>
        Promise.resolve({
          json: () => Promise.resolve({ data: url }),
        } as Response)
      )
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('calls fetch with the given URL', async () => {
    const url = 'https://api.example.com/foo'
    await fetchApi(url)
    expect(fetch).toHaveBeenCalledWith(url)
  })

  it('returns the result of res.json()', async () => {
    const result = await fetchApi('https://api.example.com/bar')
    expect(result).toEqual({ data: 'https://api.example.com/bar' })
  })

  it('passes through fetch options', async () => {
    await fetchApi('https://api.example.com', { method: 'POST' })
    expect(fetch).toHaveBeenCalledWith('https://api.example.com', {
      method: 'POST',
    })
  })
})
