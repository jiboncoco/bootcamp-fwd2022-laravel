/*=========================================================================================
    File Name: project-bug-list.js
    Description: Project bugs datables configurations
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var $primary = "#666ee8",
  $secondary = "#6B6F82",
  $success = "#1C9066",
  $info = "#1E9FF2",
  $warning = "#FF9149",
  $danger = "#FF4961";

var $themeColor = [$primary, $success, $info, $warning, $danger, $secondary];

$(document).ready(function () {
  var groupingTable = $(".row-grouping").DataTable({
    responsive: false,
    autoWidth: false,
    columnDefs: [{
      orderable: false,
      targets: "_all"
    }]
  });

  $("select").select2({
    dropdownAutoWidth: true,
    width: "100%"
  });

  var pieSimpleChart = {
    chart: {
      height: 250,
      type: "pie"
    },
    legend: {
      position: 'bottom'
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    series: [44, 55, 13, 43, 22],
    responsive: [{
        breakpoint: 990,
        options: {
          chart: {
            width: 320
          },
          legend: {
            position: "right"
          }
        }
      },
      {
        breakpoint: 620,
        options: {
          chart: {
            width: 450
          },
          legend: {
            position: "bottom"
          }
        }
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    fill: {
      colors: $themeColor
    }
  };
  // Initializing Pie Simple Chart
  var pie_simple_chart = new ApexCharts(
    document.querySelector("#bug-pie-chart"),
    pieSimpleChart
  );
  pie_simple_chart.render();
});
