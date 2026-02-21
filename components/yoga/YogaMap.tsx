'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { initializeMap } from '@/lib/initializeMap'
import { addDataLayer } from '@/lib/addDataLayer'
import { timeline } from '@/content/timeline'

const MAP_CONTAINER_ID = 'yoga-map'

/* Inject popup overrides after Mapbox CSS so only one tooltip (our .yoga-map-popup) is visible */
function usePopupOverrideStyles() {
  useEffect(() => {
    const id = 'yoga-map-popup-overrides'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.textContent = `
      .mapboxgl-popup .mapboxgl-popup-content { padding: 0 !important; margin: 0 !important; background: transparent !important; border: none !important; box-shadow: none !important; min-width: 0 !important; }
      .mapboxgl-popup .mapboxgl-popup-tip { display: none !important; }
      .mapboxgl-popup { background: transparent !important; }
    `
    document.head.appendChild(style)
    return () => document.getElementById(id)?.remove()
  }, [])
}

export default function YogaMap() {
  const searchParams = useSearchParams()
  const location = searchParams.get('location') ?? undefined
  const [error, setError] = useState<string | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const initRef = useRef(false)

  usePopupOverrideStyles()

  useEffect(() => {
    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

    if (!accessToken) {
      queueMicrotask(() =>
        setError('NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN is not configured.')
      )
      return
    }

    const container = document.getElementById(MAP_CONTAINER_ID)
    if (!container || initRef.current) return

    initRef.current = true
    mapboxgl.accessToken = accessToken

    const map = new mapboxgl.Map({
      container: MAP_CONTAINER_ID,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [30, 20],
      zoom: 1.7,
    })

    mapRef.current = map

    initializeMap(mapboxgl, map, location)

    map.on('load', () => {
      addDataLayer(map, timeline)
    })

    return () => {
      map.remove()
      mapRef.current = null
      initRef.current = false
    }
  }, [location])

  if (error) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen p-8 text-center"
        role="alert"
      >
        <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
          Mapbox Configuration Error
        </h2>
        <p className="text-primary mb-2">{error}</p>
        <p className="text-sm opacity-80">
          Set NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN in your environment and redeploy.
        </p>
      </div>
    )
  }

  return <div id={MAP_CONTAINER_ID} className="w-full h-screen" />
}
