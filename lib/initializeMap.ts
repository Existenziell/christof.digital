import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import type { Map as MapboxMap } from 'mapbox-gl'
import { timeline as mapdata } from '@/content/timeline'
import type { TimelineFeature } from '@/app/teaching/yoga/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MapboxGL = any

interface FeatureWithCenter extends TimelineFeature {
  center?: [number, number]
  place_name?: string
}

function createMarkerHtml(data: TimelineFeature): string {
  const { date, name, subname, image, description } = data.properties
  return `
    <div class="yoga-map-popup">
      <span class="yoga-map-popup-date">${date}</span>
      <h3 class="yoga-map-popup-title">${name}</h3>
      <img src="/images/timeline/${image}.jpg" alt="${name}" class="yoga-map-popup-img" />
      <h4 class="yoga-map-popup-subname">${subname}</h4>
      <div class="yoga-map-popup-desc">${description}</div>
    </div>
  `
}

/** Build popup DOM with our custom close button (positioned top-right, outside content flow) wired to the popup instance */
function createPopupContent(
  feature: TimelineFeature,
  popup: { remove: () => void }
): HTMLElement {
  const temp = document.createElement('div')
  temp.innerHTML = createMarkerHtml(feature)
  const wrapper = temp.firstElementChild as HTMLElement
  if (!wrapper) return temp

  const closeBtn = document.createElement('button')
  closeBtn.type = 'button'
  closeBtn.className = 'yoga-popup-close'
  closeBtn.setAttribute('aria-label', 'Close')
  closeBtn.innerHTML = '×'
  closeBtn.addEventListener('click', () => popup.remove())
  wrapper.appendChild(closeBtn)
  return wrapper
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
      const popup = new mapboxgl.Popup({ closeButton: false })
      popup
        .setDOMContent(createPopupContent(feature, popup))
        .setLngLat(coordinates)
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
        const feature = ev.result as TimelineFeature
        const coords = ev.result.geometry.coordinates
        const popup = new mapboxgl.Popup({ closeButton: false, offset: 15 })
        popup
          .setDOMContent(createPopupContent(feature, popup))
          .setLngLat(coords)
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
    const popup = new mapboxgl.Popup({ closeButton: false })
    popup
      .setDOMContent(createPopupContent(feature, popup))
      .setLngLat(coordinates)
      .addTo(map)
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
