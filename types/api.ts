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
