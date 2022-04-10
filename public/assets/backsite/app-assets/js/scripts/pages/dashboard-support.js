/*=========================================================================================
    File Name: dashboard-support.js
    Description: dashboard-support
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(window).on("load", function(){   
    /*************************************************
    *               Score Chart                      *
    *************************************************/
    (function () {
      var scoreChart = function scoreChart(id, labelList, series1List) {
        var scoreChart = new Chartist.Line('#' + id, {
          labels: labelList,
          series: [series1List]
        }, {
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
          }),
          fullWidth: true,
          chartPadding: {
            right: 25
          },
          series: {
            "series-1": {
              showArea: false
            }
          },
          axisX: {
            showGrid: false
          },
          axisY: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value / 1000 + 'K';
            },
            scaleMinSpace: 40
          },
          plugins: [Chartist.plugins.tooltip()],
          low: 0,
          showPoint: false,
          height: 300
        });

        scoreChart.on('created', function (data) {
          var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
          var width = data.svg.width();
          var height = data.svg.height();

          var filter = defs.elem('filter', {
            x: 0,
            y: "-10%",
            id: 'shadow' + id
          }, '', true);

          filter.elem('feGaussianBlur', { in: "SourceAlpha",
            stdDeviation: "24",
            result: 'offsetBlur'
          });
          filter.elem('feOffset', {
            dx: "0",
            dy: "32"
          });

          filter.elem('feBlend', { in: "SourceGraphic",
            mode: "multiply"
          });

          defs.elem('linearGradient', {
              id: id + '-gradient',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0
          }).elem('stop', {
              offset: 0,
              'stop-color': 'rgba(102, 110, 232, 1)'
          }).parent().elem('stop', {
              offset: 1,
              'stop-color': 'rgba(102, 110, 232, .20)'
          });

          return defs;
        }).on('draw', function (data) {
          if (data.type === 'line') {
            data.element.attr({
              filter: 'url(#shadow' + id + ')'
            });
          } else if (data.type === 'point') {

            var parent = new Chartist.Svg(data.element._node.parentNode);
            parent.elem('line', {
              x1: data.x,
              y1: data.y,
              x2: data.x + 0.01,
              y2: data.y,
              "class": 'ct-point-content'
            });
          }
          if (data.type === 'line' || data.type == 'area') {
            data.element.animate({
              d: {
                begin: 1000 * data.index,
                dur: 1000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          }
        });
      };

      var DayLabelList = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
      var DaySeries1List = {
        name: "series-1",
        data: [0, 4500, 2600, 6100, 2600, 6500, 3200, 6800]
      };

      var WeekLabelList = ["W1", "W2", "W4", "W5", "W6", "W7", "W8"];
      var WeekSeries1List = {
        name: "series-1",
        data: [77000, 18000, 61000, 26000, 58000, 32000, 70000, 45000]
      };

      var MonthLabelList = ["AUG", "SEP", "OTC", "NOV", "DEC", "JAN", "FEB"];
      var MonthSeries1List = {
        name: "series-1",
        data: [100000, 500000, 300000, 700000, 100000, 200000, 700000, 50000]
      };

      var createChart = function createChart(button) {
        var btn = button || $("#ecommerceChartView .chart-action").find(".active");

        var chartId = btn.attr("href");
        switch (chartId) {
          case "#scoreLineToDay":
            scoreChart("scoreLineToDay", DayLabelList, DaySeries1List);
            break;
          case "#scoreLineToWeek":
            scoreChart("scoreLineToWeek", WeekLabelList, WeekSeries1List);
            break;
          case "#scoreLineToMonth":
            scoreChart("scoreLineToMonth", MonthLabelList, MonthSeries1List);
            break;
        }
      };

      createChart();
      $(".chart-action li a").on("click", function () {
        createChart($(this));
      });
    })();
});
