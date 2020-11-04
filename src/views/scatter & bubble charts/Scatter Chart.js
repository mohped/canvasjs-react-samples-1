import React, {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import $ from 'jquery';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ScatterChart extends Component {

    componentWillMount() {
    }

    render() {

        var legendListId = document.getElementById("legendList");

        function customLegends(e, legendListId){
            for(var i=0; i < e.chart.data.length; i++){
                var li = document.createElement("li");
                li.style.color = e.chart.data[i].color;
                li.appendChild(document.createTextNode("Legend Test "+(i+1)));
                document.getElementById("legendList").appendChild(li);

                $('li').each(function (i) {
                    $(this).attr('id', (i));
                });
            }

            //Add click event to Custom-Legends being clicked
            // $('li').click(function (event) {
            //     var index = $(this).index();
            //     var x = document.getElementById(index);
            //     if (typeof (e.chart.data[index].visible) === "undefined" || e.chart.data[index].visible) {
            //         e.chart.data[index].visible = false;
            //     } else {
            //         e.chart.data[index].visible = true;
            //     }
            // });
        }
        const options = {

            theme: "light1",
            exportEnabled: true,
            animationEnabled: true,
            legend: {
                // horizontalAlign:"left",
                cursor: "pointer",
                itemWrap: false,
                itemMaxWidth:400,
                maxHeaderListSize:20,
                itemmouseover: function (e) {
                    e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 8;
                    e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 10;
                    // customLegends(e,legendListId);
                    e.chart.render();
                },
                itemmouseout: function (e) {
                    e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
                    e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 10;
                    e.chart.render();
                },
                itemclick:
                    function (e) {
                        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                            e.dataSeries.visible = false;
                        } else {
                            e.dataSeries.visible = true;
                        }
                        e.chart.render();
                    },
            },
            zoomEnabled: true,
            zoomType: "xy",
            title: {
                text: "نمودار جذابیت - توانمندی",
            },
            axisX: {
                title: "جذابیت",
                includeZero: true,
                minimum: 0,
                lineColor: "black",
                interval:0.1,
                labelFontColor: "black",
                // labelAutoFit: true,
                stripLines: [
                    {
                        // label: "ناحیه 3",
                        labelPlacement: "inside",
                        labelAlign: "near",
                        labelFontColor: "red",
                        lineDashType: "shortDashDotDot",
                        indexLabelOrientation: "vertical",
                        value: 0.5,
                        color: "#590D95"
                    }, {
                        // label: "ناحیه 4",
                        labelPlacement: "inside",
                        labelFontColor: "purple",
                        labelAlign: "far",
                        lineDashType: "shortDashDot",
                        value: 0.5,
                        color: "#590D95"
                    }
                ],
                maximum: 1,
                // suffix: "°C",
                crosshair: {
                    enabled: true,
                    // snapToDataPoint: true,
                    animationEnabled: true,
                }
            },
            axisY: {
                title: "توانمندی",
                includeZero: true,
                minimum:0,
                maximum: 1,
                interval:0.1,
                lineColor: "black",
                labelFontColor: "black",
                gridThickness: 0,
                tickColor: "#ccc",
                stripLines: [
                    {
                        // label: "ناحیه 2",
                        labelPlacement: "inside",
                        labelFontSize: 15,
                        labelFontWeight: "bold",
                        labelAlign: "near",
                        labelAngle: 45,
                        lineDashType: "shortDashDotDot",
                        value: 0.5,
                        color: "#590D95"
                    },
                    {
                        // label: "ناحیه 1",
                        labelPlacement: "inside",
                        labelAlign: "far",
                        labelAngle: 45,
                        lineDashType: "shortDashDotDot",
                        value: 0.5,
                        color: "#590D95"
                    }
                ],
                crosshair: {
                    animationEnabled: true,
                    enabled: true,
                    // snapToDataPoint: true
                }
            },
            toolTip: {
                backgroundColor: "#f4d5a6",
            },

            backgroundColor: "transparent",
            data: [
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "cross",
                    legendText: "آماده سازی قراضه به روش اتوماتیک",
                    markerSize: 18,
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.49,
                            y: 0.61,
                            showInLegend: true,
                            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
                            name: "آماده سازی قراضه به روش اتوماتیک",
                            markerType: "cross"
                        },
                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "square",
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerSize: 18,
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.43,
                            y: 0.49,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک",
                            markerType: "square"
                        },
                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "triangle",
                    markerSize: 18,
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.43,
                            y: 0.44,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک"
                        },

                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "circle",
                    markerSize: 18,
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.85,
                            y: 0.72,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک"
                        },

                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "triangle",
                    markerSize: 18,
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.77,
                            y: 0.22,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک"
                        },

                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "cross",
                    markerSize: 18,
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.11,
                            y: 0.33,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک"
                        },

                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "cross",
                    markerSize: 18,
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.11,
                            y: 0.33,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک"
                        },

                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "cross",
                    markerSize: 18,
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.11,
                            y: 0.33,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک"
                        },

                    ]
                },
                {
                    click: function (e) {
                        alert(e.dataSeries.type + " x:" + e.dataPoint.x + ", y: " + e.dataPoint.y + " " + e.dataPoint.toolTipContent);
                    },
                    type: "scatter",
                    showInLegend: true,
                    markerType: "cross",
                    markerSize: 18,
                    legendText: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                    markerBorderColor: "#c506d7",
                    dataPoints: [
                        {
                            x: 0.11,
                            y: 0.90,
                            showInLegend: true,
                            toolTipContent: "ذوب مواد آهنی به روش کوره قوس الکتریکی ",
                            name: "ذوب مواد آهنی به روش کوره قوس الکتریک"
                        },

                    ]
                }
            ]
        }
        return (
                <div>
                    <div style={{
                        position: "absolute",
                        textAlign: "center",
                        paddingTop: '10%',
                        left: 0,
                        top: 0,
                        width: '50%',
                        height: '50%',
                        color: "#e0e0e0",
                        fontSize: 24
                    }}> ناحیه 3
                    </div>
                    <div style={{
                        position: "absolute",
                        textAlign: "center",
                        paddingTop: '4%',
                        left: 0,
                        bottom: 0,
                        width: '50%',
                        height: '50%',
                        color: "#e0e0e0",
                        fontSize: 24
                    }}>ناحیه 1
                    </div>
                    <div style={{
                        position: "absolute",
                        textAlign: "center",
                        paddingTop: '10%',
                        right: 0,
                        top: 0,
                        width: '50%',
                        height: '50%',
                        color: "#e0e0e0",
                        fontSize: 24
                    }}>ناحیه 4
                    </div>
                    <div style={{
                        position: "absolute",
                        textAlign: "center",
                        paddingTop: '4%',
                        right: 0,
                        bottom: 0,
                        width: '50%',
                        height: '50%',
                        color: "#e0e0e0",
                        fontSize: 24
                    }}>ناحیه 2
                    </div>
                    <div >
                    <CanvasJSChart options={options}

                        // onRef={ref => this.chart = ref}
                    />
                    </div>
                    <div id="legends">
                        <ul id="legendList">
                        </ul>
                    </div>
                </div>


        );
    }
}

export default ScatterChart;