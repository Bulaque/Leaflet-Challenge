// Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
// Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
// Hint: The depth of the earth can be found as the third coordinate for each earthquake.
// Include popups that provide additional information about the earthquake when its associated marker is clicked.
// Create a legend that will provide context for your map data.


//Create map 1
let mymap = L.map("map", {
  center: [40, -95],
  zoom: 3
});

// Adding a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

let queryurl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

d3.json(queryurl).then(function(data) {
  
  function getRadius(magnitude){
    if (magnitude===0){
      return 1;
    }
    return magnitude * 4;
  }

  function getcolor(depth){
    switch (true){
      case depth > 90:
        return 'white';
      case depth > 50:
        return 'purple';
      case depth > 10:
        return 'blue';
      case depth > 7:
        return 'green';
      case depth > 5:
        return 'yellow';
      case depth > 2:
        return 'orange';
      case depth > 1:
        return 'red';
      default:
        return 'maroon'
    }
  }

  function styleinfo(feature){
    return{
      opacity: 1,
      fillOpacity: 1,
      fillColor: getcolor(feature.geometry.coordinates[2]),
      color: 'white',
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    }
  }

  L.geoJson(data, {
    pointToLayer: function(feature, latlng){
      return L.circleMarker(latlng);
    },

    style: styleinfo,

    onEachFeature: function(feature, layer){
      layer.bindPopup(
        'Magnitude:' + feature.properties.mag
        + '<br>Depth: ' + feature.geometry.coordinates[2]+
        + '<br.Location: '+ feature.properties.place
      );
    }
  }).addTo(mymap)


});
 



