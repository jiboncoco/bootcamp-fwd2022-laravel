/*=========================================================================================
    File Name: dashboard-bank.js
    Description: Bank admin panel dashboard
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function (window, document, $) {
    'use strict';

    /********************************************
    *               Gold Card                    *
    ********************************************/
    //Get the context of the Chart canvas element we want to select
    var goldChartjs = document.getElementById("gold-chart").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = goldChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(40, 208, 148,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var GoldStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth: 5,
        pointDotStrokeWidth: 4,
        tooltipFillColor: "rgba(40, 208, 148,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var GoldMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Gold",
            data: [20, 50, 30, 60, 40, 70, 50],
            backgroundColor: "transparent",
            borderColor: "#28d094",
            borderWidth: 3,
            strokeColor: "#28d094",
            pointRadius: 0,
        }]
    };

    var GoldCardconfig = {
        type: 'line',

        // Chart Options
        options: GoldStats,

        // Chart Data
        data: GoldMonthData
    };

    // Create the chart
    var GoldAreaChart = new Chart(goldChartjs, GoldCardconfig);

    /********************************************
    *               Silver Card                    *
    ********************************************/
    //Get the context of the Chart canvas element we want to select
    var silverChartjs = document.getElementById("silver-chart").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = silverChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(255, 145, 73,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var SilverStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth: 3,
        pointDotStrokeWidth: 4,
        tooltipFillColor: "rgba(255, 145, 73,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var SilverMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Silver",
            data: [30, 40, 20, 55, 40, 60, 45],
            backgroundColor: "transparent",
            borderColor: "#FF9149",
            borderWidth: 3,
            strokeColor: "#FF9149",
            pointRadius: 0,
        }]
    };

    var SilverCardconfig = {
        type: 'line',

        // Chart Options
        options: SilverStats,

        // Chart Data
        data: SilverMonthData
    };

    // Create the chart
    var SilverAreaChart = new Chart(silverChartjs, SilverCardconfig);

    /********************************************
    *               euro Card                    *
    ********************************************/
    //Get the context of the Chart canvas element we want to select
    var euroChartjs = document.getElementById("euro-chart").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = euroChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(30, 159, 242,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var euroStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth: 3,
        pointDotStrokeWidth: 4,
        tooltipFillColor: "rgba(30, 159, 242,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var euroMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "euro",
            data: [20, 50, 30, 47, 60, 40, 70],
            backgroundColor: "transparent",
            borderColor: "#1e9ff2",
            borderWidth: 3,
            strokeColor: "#1e9ff2",
            pointRadius: 0,
        }]
    };

    var euroCardconfig = {
        type: 'line',

        // Chart Options
        options: euroStats,

        // Chart Data
        data: euroMonthData
    };

    // Create the chart
    var euroAreaChart = new Chart(euroChartjs, euroCardconfig);

    /********************************************
    *               bitcoin Card                    *
    ********************************************/
    //Get the context of the Chart canvas element we want to select
    var bitcoinChartjs = document.getElementById("bitcoin-chart").getContext("2d");
    // Create Linear Gradient
    var blue_trans_gradient = bitcoinChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(255, 73, 97,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
    // Chart Options
    var bitcoinStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth: 3,
        pointDotStrokeWidth: 4,
        tooltipFillColor: "rgba(255, 73, 97,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

    // Chart Data
    var bitcoinMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "bitcoin",
            data: [30, 50, 40, 55, 45, 65, 53],
            backgroundColor: "transparent",
            borderColor: "#FF4961",
            borderWidth: 3,
            strokeColor: "#FF4961",
            pointRadius: 0,
        }]
    };

    var bitcoinCardconfig = {
        type: 'line',

        // Chart Options
        options: bitcoinStats,

        // Chart Data
        data: bitcoinMonthData
    };

    // Create the chart
    var bitcoinAreaChart = new Chart(bitcoinChartjs, bitcoinCardconfig);




    /***********************************************************
    *               Transaction Reports - Page Visist Stats               *
    ***********************************************************/
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

                filter.elem('feGaussianBlur', {
                    in: "SourceAlpha",
                    stdDeviation: "50",
                    result: 'offsetBlur'
                });
                filter.elem('feOffset', {
                    dx: "0",
                    dy: "15"
                });

                filter.elem('feBlend', {
                    in: "SourceGraphic",
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
                    'stop-color': 'rgba(22, 141, 238, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(98, 188, 246, 1)'
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
            var btn = button || $(".chart-action").find(".active");

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

    // Card
    $('.card-form').card({
        container: '.card-wrapper', // *required*
    });
    $('.jp-card').addClass("jp-card-visa jp-card-identified");


    // Calendar
    var currentMonth = moment().format('YYYY-MM');
    var nextMonth = moment().add('month', 1).format('YYYY-MM');

    var events = [{
        date: currentMonth + '-' + '10',
        title: 'Persian Kitten Auction',
        location: 'Center for Beautiful Cats'
    }, {
        date: currentMonth + '-' + '19',
        title: 'Cat Frisbee',
        location: 'Jefferson Park'
    }, {
        date: currentMonth + '-' + '23',
        title: 'Kitten Demonstration',
        location: 'Center for Beautiful Cats'
    }, {
        date: nextMonth + '-' + '07',
        title: 'Small Cat Photo Session',
        location: 'Center for Cat Photography'
    }];

    $('#bank-calendar').clndr({
        template: $('#bank-calendar-template').html(),
        events: events,
    });

})(window, document, jQuery);