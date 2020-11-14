import React, {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import $ from 'jquery';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Paper from "@material-ui/core/Paper";
import zIndex from '@material-ui/core/styles/zIndex';
import { CropLandscapeOutlined } from '@material-ui/icons';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ScatterChart extends Component {
    constructor(props) {
        super(props);
    this.state = { legendItems: [] };

    this.data = [
      // {
      //   id: 1,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",
      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.89,
      //       y: 0.61,
      //       toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //     {
      //       x: 0.89,
      //       y: 0.41,
      //       toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.89,
      //       y: 0.21,
      //       toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.49,
      //       y: 0.21,
      //       toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.69,
      //       y: 0.81,
      //       toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.61,
      //       toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.69,
      //       y: 0.81,
      //       toolTipContent: "آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      // {
      //   id: 10,
      //   click: this.clickHandler,
      //   type: "scatter",
      //   showInLegend: false,
      //   // markerType: "cross",

      //   legendText: "آماده سازی قراضه به روش اتوماتیک",
      //   markerSize: 18,
      //   markerBorderColor: "#c506d7",
      //   dataPoints: [
      //     {
      //       x: 0.59,
      //       y: 0.81,
      //       toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
      //       name: "آماده سازی قراضه به روش اتوماتیک",
      //     },
      //   ],
      // },
      {
        id: 12,
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
            y: 0.41,
            toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 13,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.19,
            y: 0.81,
            toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 14,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",

        legendText: "آماده سازی قراضه به روش اتوماتیک",
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.79,
            y: 0.81,
            toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 15,
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
            y: 0.11,
            toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
            name: "آماده سازی قراضه به روش اتوماتیک",
          },
        ],
      },
      {
        id: 16,
        click: this.clickHandler,
        type: "scatter",
        showInLegend: false,
        // markerType: "cross",
        legendText: "test",
        legendVisible: true,
        markerSize: 18,
        markerBorderColor: "#c506d7",
        dataPoints: [
          {
            x: 0.39,
            y: 0.81,
            toolTipContent: "2343آماده سازی قراضه به روش اتوماتیک",
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
    e.target.style.textDecoration = this.chart.data[index].get("visible") ? 'none' : 'line-through';
  }
  createLegends() {
    var chart = this.chart;
    var legendItems = [];
    for (var i = 0; i < chart.options.data.length; i++) {

      legendItems.push(
        <div
          onClick={this.hideUnhideDataSeries}
          data-key={i}
          key={i}
          id={chart.options.data[i].id}
          style={{
            color: chart.data[i].color,
            float: "right",
            marginLeft: "15px",
            fontSize: ".9rem",
            userSelect: "none",
            textDecoration: chart.data[i].visible ? 'none' : 'line-through'
          }}
        >
          {chart.options.data[i].legendText}
        </div>
      );
    }
    this.setState({ legendItems });
  }
  componentDidMount() {
    this.createLegends();
  }



  clickHandler(e, test) {
    console.dir(e, test)
    // console.log(this)
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
    var legend = document.getElementById(e.dataSeries.id);

    legend.style.textDecoration = 'line-through';
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
        <div style={{ marginBottom: '15px', float: 'left', width: '100%' }}>
          <div style={{ paddingTop: "10%" }}>
            <CanvasJSChart
              options={options}
              onRef={(ref) => (this.chart = ref)}
            />
          </div>
          <div style={{ float: 'left', width: '100%', position: 'relative', marginTop: '-400px', zIndex: '-1' }}>
            <table className='table' style={{ textAlign: 'center', width: '100%', height: '300px' }}>
              <tbody>
                <tr  ><td style={{ borderTop: '0', zIndex: '-1', verticalAlign: 'middle' }}>ناحیه 1
              </td><td style={{ borderTop: '0', zIndex: '-1', verticalAlign: 'middle' }}>ناحیه 2
                </td>
                </tr>
                <tr>
                  <td style={{ borderTop: '0', zIndex: '-1', verticalAlign: 'middle' }}>ناحیه 3
                </td>
                  <td style={{ borderTop: '0', zIndex: '-1', verticalAlign: 'middle' }}>ناحیه 4
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        <div
          style={{
            width: '100%',
            float: 'left',
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
