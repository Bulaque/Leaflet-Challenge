// Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
// Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
// Hint: The depth of the earth can be found as the third coordinate for each earthquake.
// Include popups that provide additional information about the earthquake when its associated marker is clicked.
// Create a legend that will provide context for your map data.

///////// Template for cirlce markers //////////////////////////////

// A function to determine the marker size based on the population
function markerSize(population) {
    return Math.sqrt(population) * 50;
  }
  
  // Define arrays to hold the created city and state markers.
  let cityMarkers = [];
  let stateMarkers = [];
  
  // Loop through locations, and create the city and state markers.
  for (let i = 0; i < locations.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
    stateMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "white",
        fillColor: "white",
        radius: markerSize(locations[i].state.population)
      })
    );
  
    // Set the marker radius for the city by passing the population to the markerSize() function.
    cityMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(locations[i].city.population)
      })
    );
  }
///////// Template for cirlce markers //////////////////////////////

// Create map
let mymap = ("map", {
    center: [,],
    zoom: 
});

// Adding a tile layer
L.tilelayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

