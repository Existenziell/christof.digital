import { describe, it, expect, vi } from 'vitest'
import { addDataLayer } from '@/lib/addDataLayer'
import type { TimelineFeatureCollection } from '@/types'

describe('addDataLayer()', () => {
  it('adds yoga source with geojson and cluster config', () => {
    const addSource = vi.fn()
    const addLayer = vi.fn()
    const map = { addSource, addLayer } as unknown as import('mapbox-gl').Map
    const data: TimelineFeatureCollection = {
      type: 'FeatureCollection',
      features: [],
    }

    addDataLayer(map, data)

    expect(addSource).toHaveBeenCalledTimes(1)
    expect(addSource).toHaveBeenCalledWith(
      'yoga',
      expect.objectContaining({
        type: 'geojson',
        data,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
        clusterProperties: { sum: ['+', ['get', 'event_count']] },
      })
    )
  })

  it('adds clusters, cluster-count, unclustered-point, and event-count layers', () => {
    const addSource = vi.fn()
    const addLayer = vi.fn()
    const map = { addSource, addLayer } as unknown as import('mapbox-gl').Map
    const data: TimelineFeatureCollection = {
      type: 'FeatureCollection',
      features: [],
    }

    addDataLayer(map, data)

    expect(addLayer).toHaveBeenCalledTimes(4)
    const layerIds = addLayer.mock.calls.map((c: [unknown]) => (c[0] as { id: string }).id)
    expect(layerIds).toEqual([
      'clusters',
      'cluster-count',
      'unclustered-point',
      'event-count',
    ])
  })

  it('uses cluster paint and filter for clusters layer', () => {
    const addLayer = vi.fn()
    const map = {
      addSource: vi.fn(),
      addLayer,
    } as unknown as import('mapbox-gl').Map
    const data: TimelineFeatureCollection = {
      type: 'FeatureCollection',
      features: [],
    }

    addDataLayer(map, data)

    const clustersCall = addLayer.mock.calls.find(
      (c: [unknown]) => (c[0] as { id: string }).id === 'clusters'
    )
    expect(clustersCall).toBeDefined()
    const layer = clustersCall![0] as { filter: unknown; paint: unknown }
    expect(layer.filter).toEqual(['has', 'point_count'])
    expect(layer.paint).toMatchObject({
      'circle-color': '#C90076',
      'circle-opacity': 0.75,
    })
  })
})
