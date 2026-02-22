declare module '@mapbox/mapbox-gl-geocoder' {
  import type { Map as MapboxMap } from 'mapbox-gl'

  interface MapboxGeocoderOptions {
    accessToken: string
    localGeocoder?: (query: string) => unknown[]
    marker?: boolean
    zoom?: number
    placeholder?: string
    mapboxgl: typeof import('mapbox-gl')
    limit?: number
  }

  export default class MapboxGeocoder {
    constructor(options: MapboxGeocoderOptions)
    on(event: string, callback: (e: unknown) => void): this
    addTo(map: MapboxMap): this
  }
}
