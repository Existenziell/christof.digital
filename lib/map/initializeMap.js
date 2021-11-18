import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { mapbox } from "./mapbox.js";
import { data as mapdata } from "./data.js"

export function initializeMap(mapboxgl, map) {

  let geocoder

  const createMarkerHtml = (data) => {
    const { date, name, subname, image, description } = data.properties;
    return `
        <div class'popup' style="font-family:Gotu; font-size:14px;">
            <span>${date}</span>
            <h1 className="title is-4 mt-2 mb-2 text-lg" style="font-size:24px; margin-bottom:10px; margin-top:10px;">${name}</h1>
            <img src='/timeline/${image}.jpg' alt='${image}' style="width: 100%; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)" />
            <h2 className="title is-6 mt-4 mb-2" style="margin-top:20px; margin-bottom:10px; font-size:16px; font-weight:bold;">${subname}</h2>
            <p>${description}</p>
        </div>
    `
  }

  // Use custom Geocoder to include the features in map.json
  const forwardGeocoder = (query) => {
    let matchingFeatures = [];
    for (let i = 0; i < mapdata.features.length; i++) {
      let feature = mapdata.features[i];
      if (feature.id.toLowerCase().search(query.toLowerCase()) !== -1) {
        feature["center"] = feature.geometry.coordinates;
        feature["place_name"] = "🙏 " + feature.id;
        matchingFeatures.push(feature);
      }
    }
    return matchingFeatures;
  };

  const createGeo = () => {
    geocoder = new MapboxGeocoder({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      localGeocoder: forwardGeocoder,
      marker: false,
      zoom: 5,
      placeholder: "Search event / location",
      mapbox: mapbox,
      limit: 20,
    });

    // Add geolocate control to the map.
    const geolocate = new mapbox.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    // Add search bar and geolocate button
    map.addControl(geocoder);
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )

    // Open corresponding popup if result is clicked
    geocoder.on("result", (e) => {
      // Close all open popups
      const popup = document.querySelector(".popup");
      if (popup) popup.parentNode.removeChild(popup);
      // Create new poppup only if own result
      if (e.result.properties.name) {
        let html = createMarkerHtml(e.result);
        let coords = e.result.geometry.coordinates;
        let popup = new mapbox.Popup({ offset: 15 })
          .setLngLat(coords)
          .setHTML(html)
          .addTo(map);
      }
    })
  }

  map.on("click", "data", function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["data"],
    })
    var clusterId = features[0].properties.cluster_id
    map
      .getSource("yoga")
      .getClusterExpansionZoom(clusterId, function (err, zoom) {
        if (err) return
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
        })
      })
  })

  map.on("click", "clusters", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["clusters"],
    });
    const clusterId = features[0].properties.cluster_id;
    map
      .getSource("yoga")
      .getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;

        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
          essential: true,
        });
      });
  });

  map.on("click", "unclustered-point", (e) => {
    let coordinates = e.features[0].geometry.coordinates.slice();
    // Ensure that if the map is zoomed out such that
    // multiple copies of the feature are visible, the
    // popup appears over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    let html = createMarkerHtml(e.features[0]);
    new mapbox.Popup().setLngLat(coordinates).setHTML(html).addTo(map);

    const lat = e.features[0].geometry.coordinates[0]
    const lon = e.features[0].geometry.coordinates[1] - 30
    map.flyTo({
      // These options control the ending camera position: centered at the target
      center: [lat, lon],
      // zoom: 9,
      bearing: 1, // north up
      speed: 0.2, // make the flying slow
      curve: 1, // change the speed at which it zooms out

      // This can be any easing function: it takes a number between
      // 0 and 1 and returns another number between 0 and 1.
      easing: (t) => {
        return t;
      },
      // this animation is considered essential with respect to prefers-reduced-motion
      essential: true,
    });
  });

  map.on("mouseenter", "data", function () {
    map.getCanvas().style.cursor = "pointer"
  })
  map.on("mouseleave", "data", function () {
    map.getCanvas().style.cursor = ""
  })

  createGeo()

}
