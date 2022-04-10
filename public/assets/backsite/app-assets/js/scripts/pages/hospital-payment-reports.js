// Hospital Payment Report Charts


// Total Cost Chart

$("#total-cost-chart").sparkline([5, 6, 7, 8, 9, 10, 12, 13, 15, 14, 13, 12, 13, 15, 17, 12, 10, 9, 8, 7, 6, 5, 4, 3], {
    type: 'bar',
    width: '100%',
    height: '30px',
    barWidth: 2,
    barSpacing: 4,
    barColor: '#FF9149'
});

// Total Salaries Chart

$("#total-salaries-chart").sparkline([5, 6, 7, 8, 9, 10, 12, 13, 15, 17, 15, 13, 12, 10, 12, 15, 13, 10, 9, 8, 7], {
    type: 'bar',
    width: '100%',
    height: '30px',
    barWidth: 2,
    barSpacing: 4,
    barColor: '#9067C6'
});

// Total Taxes Chart

$("#total-taxes-chart").sparkline([5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 16, 13, 12, 15, 10, 11, 12, 13, 12, 10, 9, 8, 7], {
    type: 'bar',
    width: '100%',
    height: '30px',
    barWidth: 2,
    barSpacing: 4,
    barColor: '#003F91'
});

// Total Miscellaneous Cost Chart

$("#total-misc-cost-chart").sparkline([5, 6, 7, 8, 9, 10, 9, 8, 10, 12, 15, 17, 14, 11, 10, 13, 15, 12, 16, 11, 9, 13, 15, 19], {
    type: 'bar',
    width: '100%',
    height: '30px',
    barWidth: 2,
    barSpacing: 4,
    barColor: '#D90368'
});

// Hospital Payment Line-area Chart

//Get the context of the Chart canvas element we want to select
var ctx = $("#payments-chart");

// Chart Options
var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
    },
    hover: {
        mode: 'label'
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                color: "#f3f3f3",
                drawTicks: false,
            },
            scaleLabel: {
                display: true,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                color: "#f3f3f3",
                drawTicks: false,
            },
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    },
    title: {
        display: true,
        text: 'Hospital Payments Chart'
    }
};

// Chart Data
var chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "General Expenses",
        data: [0, 150, 140, 105, 190, 230, 270],
        backgroundColor: "rgba(255,35,35,.3)",
        borderColor: "transparent",
        pointBorderColor: "#D1D4DB",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
    }, {
        label: "Medical Expenses",
        data: [0, 90, 120, 240, 140, 250, 190],
        backgroundColor: "rgba(240,173,78,.3)",
        borderColor: "transparent",
        pointBorderColor: "#5175E0",
        pointBackgroundColor: "#FFF",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
    }]
};

var config = {
    type: 'line',

    // Chart Options
    options: chartOptions,

    // Chart Data
    data: chartData
};

// Create the chart
var chart = new Chart(ctx, config);



// Equipment Costs

// Weekly Cost

var reports = function () {

    $('#sp-line-weekly-cost').sparkline([14, 12, 4, 9, 3, 6, 11, 10, 13, 9, 14, 11, 16, 20, 15], {
        type: "line",
        width: "100%",
        height: '100px',
        lineColor: 'rgba(255,145,73,0.4)',
        fillColor: 'rgba(255,145,73,0.4)',
        spotColor: '',
        minSpotColor: '',
        maxSpotColor: '',
        highlightSpotColor: '',
        highlightLineColor: '',
        chartRangeMin: 0,
        chartRangeMax: 20,
    })

    // Monthly Cost

    $('#sp-line-monthly-cost').sparkline([4, 9, 3, 6, 11, 10, 13, 9, 14, 11, 16, 20, 15, 20, 12, 25], {
        type: "line",
        width: "100%",
        height: '100px',
        lineColor: 'rgba(40,208,148,0.4)',
        fillColor: 'rgba(40,208,148,0.4)',
        spotColor: '',
        minSpotColor: '',
        maxSpotColor: '',
        highlightSpotColor: '',
        highlightLineColor: '',
        chartRangeMin: 0,
        chartRangeMax: 20,
    })

    // Yearly

    $('#sp-line-yearly-cost').sparkline([4, 9, 3, 6, 11, 10, 13, 9, 14, 11, 16, 20, 15, 20, 12, 25], {
        type: "line",
        width: "100%",
        height: '100px',
        lineColor: 'rgba(255,73,97,0.4)',
        fillColor: 'rgba(255,73,97,0.4)',
        spotColor: '',
        minSpotColor: '',
        maxSpotColor: '',
        highlightSpotColor: '',
        highlightLineColor: '',
        chartRangeMin: 0,
        chartRangeMax: 20,
    })
};

var sparkResize;

$(window).resize(function (e) {
    clearTimeout(sparkResize);
    sparkResize = setTimeout(reports, 500);
});

reports();