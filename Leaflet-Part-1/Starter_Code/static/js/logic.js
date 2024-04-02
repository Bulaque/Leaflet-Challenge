// Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
// Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
// Hint: The depth of the earth can be found as the third coordinate for each earthquake.
// Include popups that provide additional information about the earthquake when its associated marker is clicked.
// Create a legend that will provide context for your map data.

let queryurl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

d3.json(queryurl).then(function (data) {
  createFeatures(data.features)
});

function createFeatures(EQdata) {
  
  function onEachFeature(feature, layer) {
    layer.bindPopup('${features.properties.place}${new Date(features.properties.time)}'
  )}

  let EQ = L.geoJSON(EQdata, {
    onEachFeature: onEachFeature
  });

  createMap(EQmap);
}

function createMap(EQmap) {

  // Adding a tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  function markerSize(mag) {
    return mag;
  }
  
  // Define arrays to hold the created city and state markers.
    let magMarkers = [];
    //let depthMarkers = [];
  
    // Loop through locations, and create the city and state markers.
    for (let i = 0; i < EQdata.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
      magMarkers.push(
        L.circle(features[i].geometry.coordinates[0, 1], {
          stroke: false,
          fillOpacity: 0.75,
          color: "white",
          fillColor: "white",
          radius: markerSize(features[i].properties.mag)
        })
    )};
  
    // Set the marker radius for the city by passing the population to the markerSize() function.
    ////cityMarkers.push(
      ////L.circle(locations[i].coordinates, {
        ////stroke: false,
        ////fillOpacity: 0.75,
        ////color: "purple",
        ////fillColor: "purple",
        ////radius: markerSize(locations[i].city.population)
      ////})
    ////);
  ////}
  ///////// Template for cirlce markers //////////////////////////////

  // Create map
  let mymap = L.map("map", {
      center: [37, -95],
      zoom: 5
  });
}

