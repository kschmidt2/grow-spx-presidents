// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

     Highcharts.setOptions({
        lang: {
          thousandsSep: ''
        }
    });

document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function() {

        let chartId = document.getElementById("chart-container");

        // checks for the chart ID and displays a backup image if the browser can't find it
        if (!chartId) {
            console.log('noId');
            let chartArea = document.getElementsByClassName("chart-area");
            for(var i = 0; i < chartArea.length; i++) {
                chartArea[i].style.display = "none";
            } 
            // insert chart screenshot here
            document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
        } else {
            console.log('yesId')
        }


        const myChart =  

            Highcharts.chart(chartId, {
                chart: {
                    type: 'area',
                    styledMode: true,
                    spacingBottom: 25,
                    spacingRight: 100,
                    spacingLeft: 0   
                }, 
                title: {
                    text: null
                },
                data: {
                    googleSpreadsheetKey: '10ZOmaDlywlSWoQAK_wuOnrhC0gMC0Kp39i9CZ4BGN9I'
                },
                // for line charts only
                plotOptions: {
                    series: {
                        lineWidth: 1,
                        clip: true,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            fillColor: '#ffffff',
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            whiteSpace: 'nowrap'
                        }
                    },
                    tickLength: 5
                },
                yAxis: {
                    title: false,
                    labels: {
                        useHTML: true,
                        overflow: 'allow',
                        formatter: function () {
                            return this.value;
                        }
                    },
                    max: 4000
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                annotations: [{
                    labels: [{
                        point: {
                            x: 349126358000, // timestamp
                            y: 4000, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                        },
                        text: 'Ronald Reagan<br><b>+118%</b>',
                        y: 0,
                        x: -5  
                    }, {
                        point: {
                            x: 601327958000, // timestamp
                            y: 4000, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                        },
                        text: 'George H.W. Bush<br><b>+53%</b>',
                        y: 40,
                        x:-5 
                    }, {
                        point: {
                            x: 727731158000, // timestamp
                            y: 4000, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                        },
                        text: 'Bill Clinton<br><b>+208%</b>',
                        y: 0,
                        x:-5 
                    }, {
                        point: {
                            x: 980019158000, // timestamp
                            y: 4000, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                        },
                        text: 'George W. Bush<br><b>-37%</b>',
                        y: 40,
                        x:-5 
                    }, {
                        point: {
                            x: 1232739158000, // timestamp
                            y: 4000, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                        },
                        text: 'Barack Obama<br><b>+173%</b>',
                        y: 0,
                        x:-5  
                    }, {
                        point: {
                            x: 1572897491000, // timestamp
                            y: 4000, // value
                            xAxis: 0, // yAxis INDEX
                            yAxis: 0 // xAxis INDEX
                        },
                        text: 'Donald Trump<br><b>+35%</b>',
                        y: 40,
                        x:9
                    }],
                    labelOptions: {
                        allowOverlap: true,
                        useHTML: true,
                        verticalAlign: 'top',
                        align: 'left'
                    }
                }],
                responsive: {
                    rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                        spacingRight: 10
                        },
                        legend: {
                            align: 'left',
                            x: -18
                        },
                        tooltip: {
                            enabled: false
                        }
                    }
                    }]
                }
            });
        },1000);
    });