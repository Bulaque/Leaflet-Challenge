// Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
// Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
// Hint: The depth of the earth can be found as the third coordinate for each earthquake.
// Include popups that provide additional information about the earthquake when its associated marker is clicked.
// Create a legend that will provide context for your map data.

  // Create map
  let mymap = L.map("map", {
    center: [37, -95],
    zoom: 35,
  });

  // Adding a tile layer
  let streetlayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  let queryurl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

  let mapstyle = {
    color: "red",
    fillcolor: "blue",
    fillOpacity: 0.5,
    weight: 1.5
  };

  d3.json(queryurl).then(function(data) {
    L.geoJson(data, {
      style: mapstyle
    }).addTo(mymap);
  });

  //function createFeatures(EQdata) {
  
    //function onEachFeature(feature, layer) {
      //layer.bindPopup(`${feature.properties.place}${new Date(feature.properties.time)}`);
    //}
  
    //let EQ = L.geoJSON(EQdata, {
      //onEachFeature: onEachFeature
    //});
  

  //function markerSize(mag) {
    //return mag;
  //}
  
  // Define arrays to hold the created city and state markers.
    //let magMarkers = [];
    //let depthMarkers = [];
  
    // Loop through locations, and create the city and state markers.
    //for (let i = 0; i < EQ.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
      //magMarkers.push(
        //L.circle(EQ[i].geometry.coordinates, {
          //stroke: false,
          //fillOpacity: 0.75,
          //color: "white",
          //fillColor: "red",
          //radius: markerSize(EQ[i].properties.mag)
        //})
      //);
    //}
  
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

  // Create two separate layer groups: one for the city markers and another for the state markers.
  //let mag = L.layerGroup(magMarkers);
  //let depth = L.layerGroup(depthMarkers);

  //let overlaymaps = {
    //"Magnitude": mag,
    //"Depth of Crust": depth
  //};

  //let legend = L.control({ position: "bottomright" });
  //legend.onAdd = function() {
    //let div = L.DomUtil.create("div", "info legend");
    //let limits = geojson.options.limits;
    //let colors = geojson.options.colors;
    //let labels = [];
//}
