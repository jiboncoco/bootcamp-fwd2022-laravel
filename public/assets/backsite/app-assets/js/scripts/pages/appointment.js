/*=========================================================================================
    File Name: combo-bar-line.js
    Description: Chartjs combo bar line chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Combo bar line chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#combo-bar-line");
    Chart.Legend.prototype.afterFit = function() {
        this.height = this.height + 50;
    };
    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: true,
                barPercentage: 0.75,
                categoryPercentage: 0.3,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Days'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: false,
            text: 'Appointment Statistics'
        }
    };


    // Chart Data
    var chartData = {
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        datasets: [{
            type: 'line',
            label: "Appointment",
            data: [40, 60, 80, 60, 75, 60, 70],
            borderColor: "rgb(30,159,242)",
            backgroundColor: "transparent",
            borderWidth: 2,
            pointBorderColor: "#1e9ff2",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        },{
            type: 'bar',
            label: "Fulfilled",
            data: [70, 75, 90, 60, 80, 75, 65],
            backgroundColor: "#00A5A8",
            borderColor: "transparent",
            borderWidth: 2
        }, {
            type: 'bar',
            label: "Booked",
            data: [60, 65, 80, 62, 90, 80, 70],
            backgroundColor: "#FF4081",
            borderColor: "transparent",
            borderWidth: 2
        }, {
            type: 'bar',
            label: "Arrived",
            data: [42, 45, 65, 40, 42, 63, 35],
            backgroundColor: "#626e82",
            borderColor: "transparent",
            borderWidth: 2
        }, {
            type: 'bar',
            label: "No Show",
            data: [50, 55, 70, 40, 47, 65, 38],
            backgroundColor: "#FF6E40",
            borderColor: "transparent",
            borderWidth: 2
        }, {
            type: 'bar',
            label: "Reschedule",
            data: [40, 40, 45, 45, 45, 40, 45],
            backgroundColor: "#7C4DFF",
            borderColor: "transparent",
            borderWidth: 2
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);

});