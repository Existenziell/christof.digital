import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import type { Map as MapboxMap } from 'mapbox-gl'
import { timeline as mapdata } from '../data/timeline'
import type { TimelineFeature } from '../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MapboxGL = any

interface FeatureWithCenter extends TimelineFeature {
  center?: [number, number]
  place_name?: string
}

function createMarkerHtml(data: TimelineFeature): string {
  const { date, name, subname, image, description } = data.properties
  return `
    <div class="mapboxgl-popup-content" style="min-width: 200px;">
      <span style="font-size: 12px;">${date}</span>
      <h3 style="margin: 8px 0 4px; font-size: 16px;">${name}</h3>
      <img src="/images/timeline/${image}.jpg" alt="${name}" style="width: 100%; height: auto; border-radius: 4px;" />
      <h4 style="margin: 4px 0 8px; font-size: 12px; opacity: 0.9;">${subname}</h4>
      <p style="font-size: 13px; line-height: 1.4;">${description}</p>
    </div>
  `
}

export function initializeMap(
  mapboxgl: MapboxGL,
  map: MapboxMap,
  openedPopup?: string
): void {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  if (accessToken && 'accessToken' in mapboxgl) {
    ;(mapboxgl as { accessToken: string }).accessToken = accessToken
  }

  if (openedPopup) {
    const popupData = mapdata.features.filter(
      (f) => f.properties.image === openedPopup
    )
    if (popupData.length > 0) {
      const feature = popupData[0]
      const coordinates = feature.geometry.coordinates
      const html = createMarkerHtml(feature)
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(html)
        .addTo(map)
      map.flyTo({
        center: coordinates,
        zoom: 14,
        speed: 0.5,
        essential: true,
        easing: (t) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      })
    }
  }

  const forwardGeocoder = (query: string): FeatureWithCenter[] => {
    const matchingFeatures: FeatureWithCenter[] = []
    const q = query.toLowerCase()
    for (let i = 0; i < mapdata.features.length; i++) {
      const feature = mapdata.features[i]
      if (feature.id.toLowerCase().search(q) !== -1) {
        const f: FeatureWithCenter = { ...feature }
        f.center = feature.geometry.coordinates
        f.place_name = '🙏 ' + feature.id
        matchingFeatures.push(f)
      }
    }
    return matchingFeatures
  }

  const setupGeocoder = (): void => {
    if (!accessToken) return

    const geocoder = new MapboxGeocoder({
      accessToken,
      localGeocoder: forwardGeocoder,
      marker: false,
      zoom: 5,
      placeholder: 'Search event / location',
      mapboxgl,
      limit: 20,
    })

    map.addControl(geocoder as unknown as import('mapbox-gl').IControl)
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      })
    )

    geocoder.on('result', (e: unknown) => {
      const ev = e as { result: FeatureWithCenter }
      const popup = document.querySelector('.mapboxgl-popup')
      if (popup) popup.remove()
      if (ev.result?.properties?.name) {
        const html = createMarkerHtml(ev.result as TimelineFeature)
        const coords = ev.result.geometry.coordinates
        new mapboxgl.Popup({ offset: 15 })
          .setLngLat(coords)
          .setHTML(html)
          .addTo(map)
      }
    })
  }

  map.on('click', 'clusters', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['clusters'],
    })
    if (features.length === 0) return
    const clusterId = features[0].properties?.cluster_id
    if (clusterId === undefined) return
    const source = map.getSource('yoga') as import('mapbox-gl').GeoJSONSource
    if (!source) return
    source.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) return
      map.easeTo({
        center: (features[0].geometry as GeoJSON.Point).coordinates as [number, number],
        zoom: zoom ?? 10,
        essential: true,
      })
    })
  })

  map.on('click', 'unclustered-point', (e) => {
    if (!e.features?.[0]) return
    const coordinates = (
      e.features[0].geometry as GeoJSON.Point
    ).coordinates.slice() as [number, number]
    const feature = e.features[0] as unknown as TimelineFeature
    const html = createMarkerHtml(feature)
    new mapboxgl.Popup().setLngLat(coordinates).setHTML(html).addTo(map)
  })

  map.on('mouseenter', 'clusters', () => {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'clusters', () => {
    map.getCanvas().style.cursor = ''
  })
  map.on('mouseenter', 'unclustered-point', () => {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'unclustered-point', () => {
    map.getCanvas().style.cursor = ''
  })

  setupGeocoder()
}
