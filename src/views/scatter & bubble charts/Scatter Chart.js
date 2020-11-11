import React, {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import $ from 'jquery';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Paper from "@material-ui/core/Paper";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ScatterChart extends Component {
    constructor(props) {
        super(props);
    this.state = { legendItems: [] };

    this.data = [
      {
        id: 1,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",
        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.49,
            y: 0.61,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
          {
            x: 0.89,
            y: 0.61,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 2,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.69,
            y: 0.81,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 2,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.69,
            y: 0.81,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 2,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.69,
            y: 0.81,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 2,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.69,
            y: 0.81,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 2,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.69,
            y: 0.81,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 10,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.59,
            y: 0.81,
            toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
    ];
    this.hideUnhideDataSeries = this.hideUnhideDataSeries.bind(this);
  }

  hideUnhideDataSeries(e) {
    var index = e.target.getAttribute("data-key");
    this.chart.data[index].set(
      "visible",
      this.chart.data[index].get("visible") ? false : true
    );
  }

  componentDidMount() {
    var chart = this.chart;
    var legendItems = [];

    for (var i = 0; i < chart.options.data.length; i++) {
      legendItems.push(
        <div
          onClick={this.hideUnhideDataSeries}
          data-key={i}
          key={i}
          style={{
            color: chart.data[i].color,
            float: "right",
            marginLeft: "15px",
            fontSize: ".9rem",
            userSelect: "none",
          }}
        >
          {chart.options.data[i].legendText}
        </div>
      );
    }
    this.setState({ legendItems });
  }

  // customLegends(chart, legendListId) {
  //     for (var i = 0; i < chart.options.data.length; i++) {
  //         var li = document.createElement("li");
  //         li.style.color = chart.options.data[i].color;
  //         li.appendChild(document.createTextNode("Legend Test " + (i + 1)));
  //         legendListId.appendChild(li);
  //         $('li').each(function (i) {
  //             $(this).attr('id', (i));
  //         });
  //     }
  //
  //     //Add click event to Custom-Legends being clicked
  //     $('li').click(function (event) {
  //         var index = $(this).index();
  //         var x = document.getElementById(index);
  //         if (typeof (chart.options.data[index].visible) === "undefined" || chart.options.data[index].visible) {
  //             chart.options.data[index].visible = false;
  //         } else {
  //             chart.options.data[index].visible = true;
  //         }
  //         chart.render();
  //     });
  // }
  //
  // // componentDidMount() {
  // //
  // //     var legendListId = document.getElementById("legendList");
  // //     console.log(legendListId);
  // //     this.customLegends(can, legendListId);
  // //
  // //
  // // }

  clickHandler(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

  render() {
    const legendItems = this.state.legendItems;
    const options = {
      responsive: true,
      theme: "light1",
      exportEnabled: true,
      animationEnabled: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      animation: {
        duration: 5000,
      },
      // legend: {
      //   maxHeight: 500,
      //   scrollable: true,
      //   horizontalAlign:"left",
      //   cursor: "pointer",
      //   itemWrap: true,
      //   itemMaxWidth: 800,
      //   maxHeaderListSize: 20,

      //   itemmouseover: function (e) {
      //       console.log(CanvasJSChart);
      //       e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 8;
      //       e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 10;
      //       // customLegends(e,legendListId);
      //       e.chart.render();
      //   },
      //   itemmouseout: function (e) {

      //       e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
      //       e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 10;
      //       e.chart.render();
      //   },
      //   itemclick: (e) => this.itemClickHandler(e),a
      // },
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

        interval: 0.1,
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
            color: "#590D95",
          },
          {
            // label: "ناحیه 4",
            labelPlacement: "inside",
            labelFontColor: "purple",
            labelAlign: "far",
            lineDashType: "shortDashDot",
            value: 0.5,
            color: "#590D95",
          },
        ],
        maximum: 1,
        // suffix: "°C",
      },
      axisY: {
        title: "توانمندی",
        includeZero: true,
        minimum: 0,
        maximum: 1,
        interval: 0.1,
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
            color: "#590D95",
          },
          {
            // label: "ناحیه 1",
            labelPlacement: "inside",
            labelAlign: "far",
            labelAngle: 45,
            lineDashType: "shortDashDotDot",
            value: 0.5,
            color: "#590D95",
          },
        ],
      },
      toolTip: {
        backgroundColor: "#f4d5a6",
      },

      backgroundColor: "transparent",
      data: this.data,
    };

    return (
      <>
        <div>
          <div style={{ paddingTop: "10%" }}>
            <CanvasJSChart
              options={options}
              onRef={(ref) => (this.chart = ref)}
            />
          </div>
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              paddingTop: "20%",
              left: 0,
              top: 0,
              width: "50%",

              userSelect: "none",
              color: "#e0e0e0",
              fontSize: 24,
              zIndex: "-1",
            }}
          >
            {" "}
            ناحیه 3
          </div>
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              paddingTop: "40%",
              left: 0,
              userSelect: "none",

              width: "50%",
              top: 0,

              color: "#e0e0e0",
              fontSize: 24,
              zIndex: "-1",
            }}
          >
            ناحیه 1
          </div>
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              paddingTop: "40%",
              right: 0,
              top: 0,
              userSelect: "none",
              width: "50%",

              color: "#e0e0e0",
              fontSize: 24,
              zIndex: "-1",
            }}
          >
            ناحیه 4
          </div>
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              paddingTop: "20%",
              right: 0,

              userSelect: "none",
              top: 0,
              width: "50%",

              color: "#e0e0e0",
              fontSize: 24,
              zIndex: "-1",
            }}
          >
            ناحیه 2
          </div>

          {/* <div id="legends">
            <Paper component="ul">
              {this.data.map((data) => {
                return (
                  <li key={data.id}>
                    <Chip
                      // avatar={<Avatar>M</Avatar>}
                      label={data.legendText}
                      clickable
                      color="primary"
                      onClick={(e) => this.itemClickHandler(e, data)}
                      // deleteIcon={<DoneIcon />}
                    />
                  </li>
                );
              })}
            </Paper>
          </div> */}
        </div>
        <div
          style={{
            maxHeight: "200px",
            overflow: "auto",
            padding: "10px",
            maxHeight: "100px",
            //border: ".5px solid",
            backgroundColor: "#fafafa",
            boxShadow: ".5px 6px 5px -6px black",
          }}
          id="legends"
        >
          {legendItems}
        </div>
      </>
    );
  }

    itemClickHandler(e, data) {
        console.log("e: ", e);
        console.log("data: ", data);
        if (typeof (data.visible) === "undefined" || data.visible) {
            data.visible = false;
        } else {
            data.visible = true;
        }
        this.chart.render();
    }
}

export default ScatterChart;
