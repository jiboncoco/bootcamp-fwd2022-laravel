/*=========================================================================================
    File Name: patient-profile.js
    Description: Patient's Profile.
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Blood Pressure Chart
//Get the context of the Chart canvas element we want to select
var bloodPressure = document.getElementById("patient-blood-pressure").getContext("2d");
// Create Linear Gradient
var green_gradient = bloodPressure.createLinearGradient(0, 0, 0, 100);
green_gradient.addColorStop(0, 'rgba(248,80,50,0.1)');
green_gradient.addColorStop(1, 'rgba(255,255,255,0)');
// Chart Options
var bloodPressureStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(248,80,50,0.1)",
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
var bpMonthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
        label: "Blood Pressure",
        data: [15, 25, 35, 25, 15, 35, 15],
        backgroundColor: "transparent",
        borderColor: "#28d094",
        borderWidth: 1.5,
        strokeColor: "#28d094",
        pointRadius: 0,
    }]
};

var bpconfig = {
    type: 'line',

    // Chart Options
    options: bloodPressureStats,

    // Chart Data
    data: bpMonthData
};

// Create the chart
var bloodPressureCard = new Chart(bloodPressure, bpconfig);


/////////////////////////////////////////////////////////////////

// Heart Rate Chart
//Get the context of the Chart canvas element we want to select
var heartRate = document.getElementById("patient-heart-rate").getContext("2d");
// Create Linear Gradient
var red_gradient = bloodPressure.createLinearGradient(0, 0, 0, 100);
red_gradient.addColorStop(0, 'rgba(248,80,50,1)');
red_gradient.addColorStop(1, 'rgba(255,255,255,0)');
// Chart Options
var hrStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(248,80,50,1)",
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
var hrMonthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
        label: "Heart Rate",
        data: [30, 55, 30, 65, 30, 75, 30],
        backgroundColor: "transparent",
        borderColor: "#e73827",
        borderWidth: 1.5,
        strokeColor: "#e73827",
        pointRadius: 0,
    }]
};

var hrconfig = {
    type: 'line',

    // Chart Options
    options: hrStats,

    // Chart Data
    data: hrMonthData
};

// Create the chart
var hrCard = new Chart(heartRate, hrconfig);

////////////////////////////////////////////////////////

// Patient's Glucose Rate

// Glucose Chart
//Get the context of the Chart canvas element we want to select
var glucose = document.getElementById("patient-glucose").getContext("2d");
// Create Linear Gradient
var blue_gradient = bloodPressure.createLinearGradient(0, 0, 0, 100);
blue_gradient.addColorStop(0, 'rgba(248,80,50,1)');
blue_gradient.addColorStop(1, 'rgba(255,255,255,0)');
// Chart Options
var gStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(248,80,50,1)",
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
var gMonthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
        label: "Glucose",
        data: [50, 60, 40, 25, 40, 30, 60],
        backgroundColor: "transparent",
        borderColor: "#49a5bf",
        borderWidth: 1.5,
        strokeColor: "#49a5bf",
        pointRadius: 0,
    }]
};

var gconfig = {
    type: 'line',

    // Chart Options
    options: gStats,

    // Chart Data
    data: gMonthData
};

// Create the chart
var gCard = new Chart(glucose, gconfig);

////////////////////////////////////////////////////////

// Patient's cholestrol Rate

// cholestrol Chart
//Get the context of the Chart canvas element we want to select
var cholestrol = document.getElementById("patient-cholestrol").getContext("2d");
// Create Linear Gradient
var purple_gradient = bloodPressure.createLinearGradient(0, 0, 0, 100);
purple_gradient.addColorStop(0, 'rgba(248,80,50,1)');
purple_gradient.addColorStop(1, 'rgba(255,255,255,0)');
// Chart Options
var chStats = {
    responsive: true,
    maintainAspectRatio: false,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    tooltipFillColor: "rgba(248,80,50,1)",
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
var chMonthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
        label: "Cholestrol",
        data: [20, 60, 30, 40, 10, 50, 20],
        backgroundColor: "transparent",
        borderColor: "#db36a4",
        borderWidth: 1.5,
        strokeColor: "#db36a4",
        pointRadius: 0,
    }]
};

var chconfig = {
    type: 'line',

    // Chart Options
    options: chStats,

    // Chart Data
    data: chMonthData
};

// Create the chart
var chCard = new Chart(cholestrol, chconfig);