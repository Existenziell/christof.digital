export function addDataLayer(map, data) {
  map.addSource("yoga", {
    type: "geojson",
    data: data,
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50,
    clusterProperties: {
      sum: ["+", ["get", "event_count"]],
    },
  })

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "yoga",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": "#8F00FF",
      "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  })

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "yoga",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{sum}",
      "text-font": ["Open Sans Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "white",
    },
  })

  map.addLayer({
    id: "unclustered-point",
    type: "circle",
    source: "yoga",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-radius": ["step", ["get", "event_count"], 20, 100, 30, 750, 40],
      "circle-color": "#8F00FF",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  })

  map.addLayer({
    id: "event-count",
    type: "symbol",
    source: "yoga",
    filter: ["!", ["has", "point_count"]],
    layout: {
      "text-field": "{event_count}",
      "text-font": ["Open Sans Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "white",
    },
  })
}
