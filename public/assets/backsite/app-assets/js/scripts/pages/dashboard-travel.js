/*=========================================================================================
    File Name: dashboard-travel.js
    Description: dashboard-travel
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(window).on("load", function(){

    var new_orders = new PerfectScrollbar('#recent-orders',{
        wheelPropagation: true
    });
    
    /********************************************
    *               Monthly Sales               *
    ********************************************/
    Morris.Bar.prototype.fillForSeries = function(i) {
      var color;
      return "0-#fff-#f00:20-#000";
    };

    Morris.Bar({
        element: 'monthly-sales',
        data: [{month: 'Jan', sales: 500 }, {month: 'Feb', sales: 1500 }, {month: 'Mar', sales: 1459 }, {month: 'Apr', sales: 1289 }, {month: 'May', sales: 1647 }, {month: 'Jun', sales: 2156 }, {month: 'Jul', sales: 1835 }, {month: 'Aug', sales: 2356 }, {month: 'Sep', sales: 1459 }, {month: 'Oct', sales: 1289 }, {month: 'Nov', sales: 1647 }, {month: 'Dec', sales: 2156 }],
        xkey: 'month',
        ykeys: ['sales'],
        labels: ['Sales'],
        barGap: 4,
        barSizeRatio: 0.3,
        gridTextColor: '#bfbfbf',
        gridLineColor: '#E4E7ED',
        numLines: 5,
        gridtextSize: 14,
        resize: true,
        barColors: ['#1EC481'],
        hideHover: 'auto',
    });
});

$(window).on('load', function() {

    // Revenue - CharJS Line
    Chart.defaults.derivedLine = Chart.defaults.line;
    var draw = Chart.controllers.line.prototype.draw;
    var custom = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            var ctx = this.chart.chart.ctx;
            var _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = '#1E9FF2';
                ctx.shadowBlur = 30;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 20;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    Chart.controllers.derivedLine = custom;
    var ctx = document.querySelector("#thisYearRevenue").getContext('2d');
    var thisYearRevenueChart = new Chart(ctx, {
        type: 'derivedLine',
        data: {
            labels: ["", "", "", "", "", "", "", ""],
            datasets: [{
                data: [5000, 10000, 4000, 14500, 8000, 18500, 8000, 20000],
                borderWidth: 4,
                borderColor: '#1E9FF2',
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#1E9FF2",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#1E9FF2",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(e, d) {
                        // return '${e.xLabel} : ${e.yLabel}'
                    },
                    title: function() {
                        return;
                    }
                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                }],
                yAxes: [{
                    ticks: {
                        padding: 10,
                        stepSize: 5000,
                        max: 20000,
                        min: 0,
                    },
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        lineWidth: 1,
                        zeroLineColor: '#e5e5e5',
                    }
                }]
            }
        }
    });

    var ctx2 = document.querySelector("#lastYearRevenue").getContext('2d');
    var lastYearRevenueChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "julie", "Aug"],
            datasets: [{
                data: [7000, 15000, 6000, 10500, 3000, 11500, 4000, 10000],
                borderWidth: 4,
                borderDash: [8, 4],
                borderColor: '#c3c3c3',
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#c3c3c3",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#c3c3c3",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(e, d) {
                        // return '${e.xLabel} : ${e.yLabel}'
                    },
                    title: function() {
                        return;
                    }
                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                }],
                yAxes: [{
                    ticks: {
                        padding: 10,
                        stepSize: 5000,
                        max: 20000,
                        min: 0,
                    },
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: '#e5e5e5',
                    }
                }]
            }
        }
    });

    //Sessions by Browser
    // -----------------------------------
    Morris.Donut({
        element: 'sessions-browser-donut-chart',
        data: [{
            label: "India",
            value: 3500
        }, {
            label: "USA",
            value: 2500
        }, {
            label: "Germany",
            value: 2000
        }, {
            label: "New York",
            value: 1000
        },{
            label: "Aingapore",
            value: 500
        } ],
        resize: true,
        colors: ['#2DCEE3', '#16D39A', '#40C7CA', '#FFA87D', '#FF7588']
    });

});

// Vector Maps
    // -----------------------------------
    $('#world-map-markers').vectorMap({
      map: 'world_mill',
      backgroundColor: '#fff',
      zoomOnScroll: false,
      series: {
        regions: [{
          values: visitorData,
          scale: ['#ff7588', '#fddde1'],
          normalizeFunction: 'polynomial'
        }]
      },
      onRegionTipShow: function(e, el, code){
        el.html(el.html()+' (Visitor - '+visitorData[code]+')');
      }
    });