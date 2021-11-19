// https://github.com/naomigrace/nextjs-with-mapbox-gl-js/blob/master/pages/index.js

import { useEffect, useState } from "react"
import { initializeMap } from "../lib/map/initializeMap"
import { addDataLayer } from "../lib/map/addDataLayer"
import Head from "next/head"
import Nav from "../components/Nav"
import 'mapbox-gl/dist/mapbox-gl.css'
import { timeline as data } from "../lib/timeline"

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")

const MapComponent = () => {

  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  useEffect(() => {
    setPageIsMounted(true)

    let map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      // style: "mapbox://styles/mapbox/dark-v10",
      // style: "mapbox://styles/mapbox/streets-v11",
      // style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [9.565593, 39.124734],
      zoom: 1.5,
      // pitch: 45,
    })

    initializeMap(mapboxgl, map)
    setMap(map)
  }, [])

  useEffect(() => {
    if (pageIsMounted && data) {
      Map.on("load", function () {
        addDataLayer(Map, data)
      })
    }
  }, [pageIsMounted, setMap, Map])

  return (
    <div className="min-w-max h-screen">
      <Head>
        <title>Map | christof.digital</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <meta name="description" content="Join me on a visual journey through my life | christof.digital | shift-happens" />
      </Head>
      <Nav />
      <div id="map" className="h-full w-full" />
    </div>
  )

}

export default MapComponent
