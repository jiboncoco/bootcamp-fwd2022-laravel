/*=========================================================================================
    File Name: clndr.js
    Description: clndr
    --------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function () {
  var currentMonth = moment().format("YYYY-MM");
  var nextMonth = moment()
    .add("month", 1)
    .format("YYYY-MM");

  var events = [{
      date: currentMonth + "-" + "10",
      title: "Persian Kitten Auction",
      location: "Center for Beautiful Cats"
    },
    {
      date: currentMonth + "-" + "19",
      title: "Cat Frisbee",
      location: "Jefferson Park"
    },
    {
      date: currentMonth + "-" + "23",
      title: "Kitten Demonstration",
      location: "Center for Beautiful Cats"
    },
    {
      date: nextMonth + "-" + "07",
      title: "Small Cat Photo Session",
      location: "Center for Cat Photography"
    }
  ];

  /****************************************
   *				Multiday				*
   ****************************************/
  var multidayArray = [{
      title: "Appointment Day 1",
      location: "Appointment with a patient at 5:00pm",
      startDate: moment().format("YYYY-MM-") + "12",
      endDate: moment().format("YYYY-MM-") + "17"
    },
    {
      title: "Appointment Day 2",
      location: "Appointment With a patient For Consultation about Skin Problems",
      startDate: moment().format("YYYY-MM-") + "24",
      endDate: moment().format("YYYY-MM-") + "27"
    }
  ];

  $("#clndr-multiday").clndr({
    template: $("#clndr-template").html(),
    events: multidayArray,
    multiDayEvents: {
      endDate: "endDate",
      startDate: "startDate"
    }
  });

});
$(window).on("load", function () {
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
});
