/** GeoJSON Point geometry for timeline map features */
export interface PointGeometry {
  type: 'Point'
  coordinates: [number, number]
}

/** Properties for a timeline feature (yoga journey entry) */
export interface TimelineFeatureProperties {
  name: string
  subname: string
  image: string
  date: string
  description: string
  mapOnly: boolean
  cluster: boolean
  event_count: number
  venue: string
}

/** Single GeoJSON feature for timeline/map */
export interface TimelineFeature {
  type: 'Feature'
  id: string
  properties: TimelineFeatureProperties
  geometry: PointGeometry
}

/** GeoJSON FeatureCollection for yoga timeline */
export interface TimelineFeatureCollection {
  type: 'FeatureCollection'
  features: TimelineFeature[]
}
