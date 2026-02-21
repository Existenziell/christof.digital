import { describe, it, expect, vi, beforeEach } from 'vitest'
import { initializeMap } from '@/lib/initializeMap'

vi.mock('@/content/timeline', () => ({
  timeline: {
    features: [
      {
        type: 'Feature',
        id: 'test-id',
        properties: {
          name: 'Test',
          subname: 'Sub',
          image: 'test-img',
          date: '2024-01-01',
          description: 'Desc',
          mapOnly: false,
          cluster: true,
          event_count: 1,
          venue: 'Venue',
        },
        geometry: {
          type: 'Point',
          coordinates: [10, 20],
        },
      },
    ],
  },
}))

describe('initializeMap()', () => {
  let mapboxgl: {
    accessToken?: string
    Popup: ReturnType<typeof vi.fn>
    GeolocateControl: ReturnType<typeof vi.fn>
  }
  let map: {
    addControl: ReturnType<typeof vi.fn>
    on: ReturnType<typeof vi.fn>
    flyTo: ReturnType<typeof vi.fn>
    getSource: ReturnType<typeof vi.fn>
    getCanvas: ReturnType<typeof vi.fn>
  }

  beforeEach(() => {
    const mockPopup = vi.fn().mockImplementation(() => ({
      setDOMContent: vi.fn().mockReturnThis(),
      setLngLat: vi.fn().mockReturnThis(),
      addTo: vi.fn().mockReturnThis(),
      remove: vi.fn(),
    }))
    mapboxgl = {
      accessToken: undefined,
      Popup: mockPopup,
      GeolocateControl: vi.fn().mockReturnValue({}),
    }
    map = {
      addControl: vi.fn(),
      on: vi.fn(),
      flyTo: vi.fn(),
      getSource: vi.fn(),
      getCanvas: vi.fn().mockReturnValue({ style: { cursor: '' } }),
    }
  })

  it('sets mapboxgl.accessToken when NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN is set', () => {
    const prev = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN = 'token-123'
    try {
      initializeMap(mapboxgl as never, map as never)
      expect(mapboxgl.accessToken).toBe('token-123')
    } finally {
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN = prev
    }
  })

  it('registers click handlers for clusters and unclustered-point', () => {
    initializeMap(mapboxgl as never, map as never)
    const onCalls = map.on.mock.calls
    const clickClusters = onCalls.find(
      (c: [string, string]) => c[0] === 'click' && c[1] === 'clusters'
    )
    const clickUnclustered = onCalls.find(
      (c: [string, string]) => c[0] === 'click' && c[1] === 'unclustered-point'
    )
    expect(clickClusters).toBeDefined()
    expect(clickUnclustered).toBeDefined()
  })

  it('registers mouseenter/mouseleave for clusters and unclustered-point', () => {
    initializeMap(mapboxgl as never, map as never)
    const onCalls = map.on.mock.calls.map((c: [string, string]) => c.slice(0, 2))
    expect(onCalls).toContainEqual(['mouseenter', 'clusters'])
    expect(onCalls).toContainEqual(['mouseleave', 'clusters'])
    expect(onCalls).toContainEqual(['mouseenter', 'unclustered-point'])
    expect(onCalls).toContainEqual(['mouseleave', 'unclustered-point'])
  })

  it('opens popup and flies to feature when openedPopup matches feature image', () => {
    initializeMap(mapboxgl as never, map as never, 'test-img')
    expect(mapboxgl.Popup).toHaveBeenCalledWith({ closeButton: false })
    expect(map.flyTo).toHaveBeenCalledWith(
      expect.objectContaining({
        center: [10, 20],
        zoom: 14,
      })
    )
  })

  it('does not open popup or fly when openedPopup does not match any feature', () => {
    initializeMap(mapboxgl as never, map as never, 'non-existent')
    expect(map.flyTo).not.toHaveBeenCalled()
  })
})
