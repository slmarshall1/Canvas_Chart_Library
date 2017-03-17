window.onload = function () {
    var chart = new CanvasJS.Chart("chartCanvas");

    chart.options.axisY = { prefix: "", suffix:"" };
    chart.options.title = { text: "Seasonal Sales Differencials" };

    var series1 = { //dataSeries - spring
        type: "spline",
        name: "Spring",
        showInLegend: true
    };

    var series2 = { //dataSeries - summer
        type: "spline",
        name: "Summer",
        showInLegend: true
    };

     var series3 = { //dataSeries - autumn
        type: "spline",
        name: "Autumn",
        showInLegend: true
    };

     var series4 = { //dataSeries - winter
        type: "spline",
        name: "Winter",
        showInLegend: true
    };

    chart.options.data = [];
    chart.options.data.push(series1);
    chart.options.data.push(series2);
    chart.options.data.push(series3);
    chart.options.data.push(series4);


    series1.dataPoints = [
            { label: "Mot", y: 8 },
            { label: "Service", y: 9 },
            { label: "Taxi Test", y: 4 },
            { label: "Repairs", y: 3 },
            { label: "Diagnostics", y: 2 }
    ];


    series2.dataPoints = [
        { label: "Mot", y: 23 },
        { label: "Service", y: 40 },
        { label: "Taxi Test", y: 58 },
        { label: "Repairs", y: 47 },
        { label: "Diagnostics", y: 30}
    ];

    series3.dataPoints = [
            { label: "Mot", y: 59 },
            { label: "Service", y: 10 },
            { label: "Taxi Test", y: 30 },
            { label: "Repairs", y: 70 },
            { label: "Diagnostics", y: 30}
    ];

    series4.dataPoints = [
            { label: "Mot", y: 18 },
            { label: "Service", y: 29 },
            { label: "Taxi Test", y: 40 },
            { label: "Repairs", y: 34 },
            { label: "Diagnostics", y: 24 }
    ];

    chart.render();
};


