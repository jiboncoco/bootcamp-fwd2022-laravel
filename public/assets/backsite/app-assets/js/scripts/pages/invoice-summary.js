/*=========================================================================================
    File Name: invoice-summary.js
    Description: Invoices summary configurations
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

$(document).ready(function () {
  var radialBarMultipleChart = {
    chart: {
      height: 550,
      type: "radialBar"
    },
    responsive: [
      {
        breakpoint: 530,
        options: {
          chart: {
            height: 350
          },
        }
      }
    ],
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
            formatter: function (w) {
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
    document.querySelector("#invoice-total-recievables"),
    radialBarMultipleChart
  );
  radial_bar_multiple_chart.render();

  var columnBasicChart = {
    chart: {
      height: 350,
      type: "bar"
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    },
    fill: {
      colors: $themeColor
    }
  };
  // Initializing Column Basic Chart
  var column_basic_chart = new ApexCharts(
    document.querySelector("#sales-and-expenses"),
    columnBasicChart
  );
  column_basic_chart.render();

  var pieDonutSimpleChart = {
    chart: {
      height: 350,
      type: "donut"
    },
    series: [44, 55, 41, 17, 15],
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
            position: "right"
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

  // Initializing Pie Donut Simple Chart
  var pie_donut_simple_chart = new ApexCharts(
    document.querySelector("#your-top-expenses"),
    pieDonutSimpleChart
  );
  pie_donut_simple_chart.render();
});
