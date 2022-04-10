/*=========================================================================================
    File Name: maps-leaflet.js
    Description: Leaflet Maps.
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function () {
  $(".maps-leaflet-container").css("height", "450px");
  // initialize the basic map
  var mapsLeafletBasic = L.map('maps-leaflet-basic').setView([42.35, -71.08], 10);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletBasic);

  // initialize the Marker map
  var mapsLeafletMarker = L.map('maps-leaflet-marker').setView([51.5, -0.09], 12);
  var marker = L.marker([51.5, -0.09]).addTo(mapsLeafletMarker);
  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mapsLeafletMarker);
  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mapsLeafletMarker);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletMarker);

  // initialize the Dragable Marker map
  var mapsLeafletMarkerDragable = L.map('maps-leaflet-marker-dragable').setView([48.817152, 2.4550], 12);
  var mapsLeafletMarkerLoc = L.marker([48.817152, 2.4550], {
    draggable: 'true'
  }).addTo(mapsLeafletMarkerDragable);
  mapsLeafletMarkerLoc.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletMarkerDragable);

  // initialize the user location map
  var mapsLeafletUserLocation = L.map('maps-leaflet-user-location').setView([42.35, -71.08], 10);
  mapsLeafletUserLocation.locate({
    setView: true,
    maxZoom: 16
  });

  function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(mapsLeafletUserLocation)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(mapsLeafletUserLocation);
  }
  mapsLeafletUserLocation.on('locationfound', onLocationFound);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletUserLocation);

  // initialize the Cutom Icons map
  var mapsLeafletCustomIcons = L.map('maps-leaflet-custom-icons').setView([51.5, -0.09], 10);
  var customIconBlue = L.icon({
    iconUrl: '../../../app-assets/images/map/leaflet/customIcons/map-marker-blue.png',
    iconSize: [52, 52], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var customIconPink = L.icon({
    iconUrl: '../../../app-assets/images/map/leaflet/customIcons/map-marker-pink.png',
    iconSize: [52, 52], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  L.marker([51.5, -0.09], {
    icon: customIconPink
  }).addTo(mapsLeafletCustomIcons);
  L.marker([51.4, -0.51], {
    icon: customIconBlue
  }).addTo(mapsLeafletCustomIcons);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletCustomIcons);

  // initialize the GeoJSON map
  var mapsLeafletGeojson = L.map('maps-leaflet-geojson').setView([44.2669, -72.576], 3);
  var mapsLeafletGeojsoonUsState = L.geoJson(statesData).addTo(mapsLeafletGeojson);

  function getColor(d) {
    return d > 1000 ? '#800026' :
      d > 500 ? '#BD0026' :
      d > 200 ? '#E31A1C' :
      d > 100 ? '#FC4E2A' :
      d > 50 ? '#FD8D3C' :
      d > 20 ? '#FEB24C' :
      d > 10 ? '#FED976' :
      '#FFEDA0';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }
  L.geoJson(statesData, {
    style: style
  }).addTo(mapsLeafletGeojson);
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletGeojson);

  // initialize the Layer Groups and Layers Control map
  var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
  var cities = L.layerGroup([littleton, denver, aurora, golden]);
  var street = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18,
    }),
    watercolor = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18,
    });
  var mapsLeafletGroupControl = L.map('maps-leaflet-groups-control', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [street, cities]
  });
  var baseMaps = {
    "Street": street,
    "Watercolor": watercolor
  };
  var overlayMaps = {
    "Cities": cities
  };
  L.control.layers(baseMaps, overlayMaps).addTo(mapsLeafletGroupControl);
  L.tileLayer('https://c.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(mapsLeafletGroupControl);
});
