// Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
// Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
// Hint: The depth of the earth can be found as the third coordinate for each earthquake.
// Include popups that provide additional information about the earthquake when its associated marker is clicked.
// Create a legend that will provide context for your map data.

///// 2 /////
let queryurl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

///// 2 /////
d3.json(queryurl).then(function(data) {
  createFeatures(data.features);
  });

///// 2 /////
function createFeatures(EQdata) {
  function onEachFeature(feature, layer) {
    layer.bindPopup(`${feature.properties.title}`);
  }
  let EQ = L.geoJSON(EQdata, {
    onEachFeature: onEachFeature
  });
  createMap(EQ);
}

///// 2 /////
function createMap(EQ) {

  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  let baseMaps = {
    "Street Map": street
  };

  let OLM = {
    Earthquakes: EQ
  };

  // Create Map 2
  let myMap = L.map("map", {
    center: [37, -95],
    zoom: 3,
    layers: [street, EQ]
  })

  L.control.layers(baseMaps, OLM, {
    collapsed: false
  }).addTo(myMap);
}

///// 1 /////
// Create map 1
//let mymap = L.map("map", {
  //center: [37, -95],
  //zoom: 3
//});

///// 1 /////
// Adding a tile layer
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mymap);

///// 1 /////
//function markerSize(Mag) {
  //return Mag;
//}

///// 1 /////
//let queryurl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

///// 1 /////
//let mapstyle = {
  //color: "red",
  //fillcolor: "blue",
  //fillOpacity: 0.5,
  //weight: 1.5
//};

///// 1 /////
//d3.json(queryurl).then(function(data) {
  //L.geoJson(data, {
    //style: mapstyle
  //}).addTo(mymap);
//});




//////////////////////////////////////////////////

// Define arrays to hold the created city and state markers.
/////let magMarkers = [];
//let depthMarkers = [];

// Loop through locations, and create the city and state markers.
/////for (let i = 0; i < EQ.length; i++) {

// Setting the marker radius for the state by passing population into the markerSize function
  /////magMarkers.push(
    /////L.circle(EQ[i].geometry.coordinates, {
      /////stroke: false,
      /////fillOpacity: 0.75,
      /////color: "white",
      /////fillColor: "red",
      /////radius: markerSize(EQ[i].properties.mag)
    /////})
  /////);
/////}

/////let Mag = L.layerGroup(magMarkers);
//let depth = L.layerGroup(depthMarkers);

// Set the marker radius for the city by passing the population to the markerSize() function.
  //depthMarkers.push(
  //L.circle(EQ[i].geometry.coordinates, {
    //stroke: false,
    //fillOpacity: 0.75,
    //color: "purple",
    //fillColor: "purple",
    //radius: markerSize(EQ[i].geometry.coordinates[2])
  //})
//);
//}

/////let overlaymaps = {
/////"Magnitude": mag
//"Depth of Crust": depth
/////};

/////L.control.Layers(null, overlaymaps, {
  /////collapsed: false
/////}).addTo(mymap);

  

