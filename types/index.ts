import type { SVGProps } from 'react'

/** Nav */
export interface MainLink {
  label: string
  url: string
}

/** Social links (footer, contact, etc.) */
export interface SocialLink {
  name: string
  link: string
  image: string
}

export interface Teaching {
  date: string
  title: string
  description: string
  image?: string
  link?: string
  linkText?: string
  external?: boolean
}

export interface Education {
  title: string
  school: string
  link: string
  location: string
  date: string
  duration: string
  image: string
  certificates?: { name: string; date: string }[]
}

export interface CurriculumEntry {
  company: string
  title: string
  companyType: string
  date: string
  location: string
  desc: string
  latestProject?: string
  skills: string[]
  companyUrl?: string
  duration?: string
}

export interface Project {
  name: string
  desc: string
  tech: string[]
  image: string
  link?: string
  linkText?: string
  external?: boolean
}

export interface ApiCharacterOrigin {
  name: string
}

export interface Character {
  name: string
  image: string
  species: string
  gender: string
  type?: string
  origin: ApiCharacterOrigin
  location: ApiCharacterOrigin
  status: string
}

export interface ApiResponse {
  info?: { next?: string; count?: number; pages?: number }
  error?: string
  results?: Array<Character & { id: number }>
}

export interface PointGeometry {
  type: 'Point'
  coordinates: [number, number]
}

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

export interface TimelineFeature {
  type: 'Feature'
  id: string
  properties: TimelineFeatureProperties
  geometry: PointGeometry
}

export interface TimelineFeatureCollection {
  type: 'FeatureCollection'
  features: TimelineFeature[]
}

export interface FeatureWithCenter extends TimelineFeature {
  center?: [number, number]
  place_name?: string
}

/** Component props */
export interface TagListProps {
  items: string[]
}

export interface QuoteProps {
  text: string
  classes?: string
}

export interface ProjectsListProps {
  projects: Project[]
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export interface MobileNavProps {
  mainLinks: MainLink[]
  pathname: string | null
  isPathInSection: (pathname: string | null, url: string) => boolean
}

export interface PaginationProps {
  data?: ApiResponse
  page: number
  setPage: (fn: (p: number) => number) => void
}

export interface FiltersProps {
  showFilter: boolean
  setShowFilter: (v: boolean) => void
  filterStatus: string
  setFilterStatus: (v: string) => void
  filterGender: string
  setFilterGender: (v: string) => void
}

export interface SortingProps {
  sortBy: boolean
  toggleSortBy: () => void
}

/** Theme */
export type Theme = 'light' | 'dark' | 'auto' | undefined

export interface ThemeContextValue {
  theme: Theme
  setLight: () => void
  setDark: () => void
}
