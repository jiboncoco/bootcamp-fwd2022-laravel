/*=========================================================================================
    File Name: project-summary.js
    Description: Project Summary Page JS
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

$(document).ready(function() {
  var pieSimpleChart = {
    chart: {
      height: 350,
      type: "pie"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    series: [44, 55, 13, 43, 22],
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 520
          },
          legend: {
            position: "bottom"
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
    document.querySelector("#task-pie-chart"),
    pieSimpleChart
  );
  pie_simple_chart.render();

  var radialBarMultipleChart = {
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px"
          },
          value: {
            fontSize: "16px"
          },
          total: {
            show: true,
            label: "Total",
            formatter: function(w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            }
          }
        }
      }
    },
    fill: {
      colors: $themeColor
    },
    series: [44, 55, 67, 83],
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
  };
  // Initializing Radial Bar Multiple Chart
  var radial_bar_multiple_chart = new ApexCharts(
    document.querySelector("#bug-pie-chart"),
    radialBarMultipleChart
  );
  radial_bar_multiple_chart.render();
});
