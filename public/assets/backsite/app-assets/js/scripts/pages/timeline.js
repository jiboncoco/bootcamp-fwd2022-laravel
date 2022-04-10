/*=========================================================================================
    File Name: timeline.js
    Description: Checkbox & Radio buttons with icheck, bootstrap switch & switchery etc..
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
    ==========================================================================================*/
// custom colors declaration
var $primary = "#666ee8",
  $secondary = "#6B6F82",
  $success = "#1C9066",
  $info = "#1E9FF2",
  $warning = "#FF9149",
  $danger = "#FF4961";

var $themeColor = [$primary, $success, $info, $warning, $danger, $secondary];
(function(window, document, $) {
  "use strict";

  // Checkbox & Radio 1
  $(".icheck-task input").iCheck({
    checkboxClass: "icheckbox_square-blue",
    radioClass: "iradio_square-blue"
  });

  var mixedLineColumnAreaChart = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },
    colors: $themeColor,
    series: [
      {
        name: "Facebook",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      },
      {
        name: "Vine",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      },
      {
        name: "Dribbble",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }
    ],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003"
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " views";
          }
          return y;
        }
      }
    },
    legend: {
      labels: {
        useSeriesColors: true
      },
      markers: {
        customHTML: [
          function() {
            return "";
          },
          function() {
            return "";
          },
          function() {
            return "";
          }
        ]
      }
    }
  };
  // Initializing Mixed Line Column Area Chart
  var mixed_line_column_area_chart = new ApexCharts(
    document.querySelector("#stacked-column"),
    mixedLineColumnAreaChart
  );
  mixed_line_column_area_chart.render();
  var radarBasicChart = {
    chart: {
      height: 350,
      type: "radar"
    },
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
      }
    ],
    title: {
      text: "Basic Radar Chart"
    },
    fill: {
      colors: $themeColor
    },
    labels: ["January", "February", "March", "April", "May", "June"]
  };
  // Initializing Radar Basic Chart
  var radar_basic_chart = new ApexCharts(
    document.querySelector("#non-ribbon-chord"),
    radarBasicChart
  );
  radar_basic_chart.render();
})(window, document, jQuery);
$(window).on("load", function() {
  // initialize the Dragable Marker map
  var mapsLeafletMarkerDragable = L.map("maps-leaflet-marker-dragable").setView(
    [48.861927, 2.349833],
    12
  );
  var mapsLeafletMarkerLoc = L.marker([48.861927, 2.349833], {
    draggable: "true"
  }).addTo(mapsLeafletMarkerDragable);
  mapsLeafletMarkerLoc
    .bindPopup("<b>I am at Paris!</b><br>Got more Chill!!!.")
    .openPopup();
  L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(mapsLeafletMarkerDragable);
});
