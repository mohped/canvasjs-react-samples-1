import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import ColumnChartwithIndexlabel from "./overview/Column Chart with Indexlabel";
import ChartWithCrosshair from "./overview/Chart with Crosshair";
import ChartWithZoom from "./overview/Chart with Zoom";
import AnimatedChart from "./overview/Animated Chart";
import MultiseriesChart from "./overview/Multiseries Chart";
import MultipleAxisChart from "./overview/Multiple Axis Chart";
import ChartWithScaleBreaks from "./overview/Chart with Scale Breaks";
import ChartWithLogarithmicAxis from "./overview/Chart with Logarithmic Axis";
import PerformanceDemo from "./overview/Performance Demo";
import ChartWithDrillDown from "./overview/Chart with Drilldown";

import LineChart from "./line charts/Line Chart";
import SplineChart from "./line charts/Spline Chart";
import StepLineChart from "./line charts/Step Line Chart";

import AreaChart from "./area charts/Area Chart";
import MultiSeriesAreaChart from "./area charts/Multi Series Area Chart";
import SplineAreaChart from "./area charts/Spline Area Chart";
import StepAreaChart from "./area charts/Step Area Chart";
import RangeAreaChart from "./area charts/Range Area Chart";
import RangeSplineAreaChart from "./area charts/Range Spline Area Chart";
import StackedAreaChart from "./area charts/Stacked Area Chart";
import StackedArea100Chart from "./area charts/Stacked Area 100 Chart";

import ColumnChart from "./column charts/Column Chart";
import BarChart from "./column charts/Bar Chart";
import RangeColumnChart from "./column charts/Range Column Chart";
import StackedColumnChart from "./column charts/Stacked Column Chart";
import StackedColumn100Chart from "./column charts/Stacked Column 100 Chart";
import RangeBarChart from "./column charts/Range Bar Chart";
import StackedBarChart from "./column charts/Stacked Bar Chart";
import StackedBar100Chart from "./column charts/Stacked Bar 100 Chart";
import WaterfallChart from "./column charts/Waterfall Chart";

import PieChart from "./pie & funnel charts/Pie Chart";
import PieChartWithCustomization from "./pie & funnel charts/Pie Chart with Customization";
import DoughnutChart from "./pie & funnel charts/Doughnut Chart";
import FunnelChart from "./pie & funnel charts/Funnel Chart";
import FunnelChartWithCustomNeck from "./pie & funnel charts/Funnel Chart with Custom Neck";
import PyramidChart from "./pie & funnel charts/Pyramid Chart";

import CandlestickChart from "./financial charts/Candlestick Chart";
import OhlcChart from "./financial charts/OHLC Chart";

import ScatterChart from "./scatter & bubble charts/Scatter Chart";
import ScatterChartWithCustomMarkers from "./scatter & bubble charts/Scatter Chart with Custom Markers";
import BubbleChart from "./scatter & bubble charts/Bubble Chart";

import BoxAndWhiskerChart from "./box & whisker charts/Box & Whisker Chart";
import BoxAndWhiskerChartWithCustomization from "./box & whisker charts/Box & Whisker Chart with Customization";

import ErrorChart from "./combination charts/Error Chart";
import ErrorLineChart from "./combination charts/Error Line Chart";
import ParetoChart from "./combination charts/Pareto Chart";
import ColumnLineAreaChart from "./combination charts/Column Line Area Chart";

import DynamicLineChart from "./dynamic charts/Dynamic Line Chart";
import DynamicColumnChart from "./dynamic charts/Dynamic Column Chart";
import DynamicMultiSeriesChart from "./dynamic charts/Dynamic Multi Series Chart";


class Template extends Component {
  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">CanvasJS Examples</Navbar.Brand><span className="hidden-xs text-muted">React</span>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						
						<Nav to="/" className="flex-sm-column" id="sidebar">
							<ListGroup className="nav nav-sidebar flex-sm-column">
							{/*	/!*<ListGroup.Item>*!/*/}
							{/*	/!*	<a href="#overview" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>OVERVIEW</span></a>*!/*/}
							{/*	/!*</ListGroup.Item>*!/*/}
							{/*	<ListGroup>*/}
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								<ListGroup.Item>
									<a href="#scatterCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>نمودار های تراکم و اسکاتر</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="scatterCharts">
										<ListGroup.Item> <NavLink to="/scatter-chart">نمودار اسکاتر چارت</NavLink></ListGroup.Item>
										{/*<ListGroup.Item> <NavLink to="/scatter-chart-with-custom-marker">Scatter Chart with Custom Marker</NavLink></ListGroup.Item>*/}
										{/*<ListGroup.Item> <NavLink to="/bubble-chart">Bubble Chart</NavLink></ListGroup.Item>*/}
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
								</ListGroup>
							{/*</ListGroup>*/}
						</Nav>
						
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									<Route exact path="/" component={ColumnChart}/>
									<Route exact path="/chart-with-index-label" component={ColumnChartwithIndexlabel}/>
									<Route path="/chart-with-crosshair" component={ChartWithCrosshair}/>
									<Route path="/chart-zoom-pan" component={ChartWithZoom}/>
									<Route path="/animated-chart" component={AnimatedChart}/>
									<Route path="/multiseries-chart" component={MultiseriesChart}/>
									<Route path="/chart-with-multiple-axes" component={MultipleAxisChart}/>
									<Route path="/chart-axis-scale-break" component={ChartWithScaleBreaks}/>
									<Route path="/chart-with-logarithmic-axis" component={ChartWithLogarithmicAxis}/>
									<Route path="/performance-demo-chart" component={PerformanceDemo}/>
									<Route path="/drilldown-chart" component={ChartWithDrillDown}/>
									
									<Route path="/line-chart" component={LineChart}/>
									<Route path="/spline-chart" component={SplineChart}/>
									<Route path="/step-line-chart" component={StepLineChart}/>
									
									<Route path="/area-chart" component={AreaChart}/>
									<Route path="/multi-series-area-chart" component={MultiSeriesAreaChart}/>
									<Route path="/spline-area-chart" component={SplineAreaChart}/>
									<Route path="/step-area-chart" component={StepAreaChart}/>
									<Route path="/range-area-chart" component={RangeAreaChart}/>
									<Route path="/range-spline-area-chart" component={RangeSplineAreaChart}/>
									<Route path="/stacked-area-chart" component={StackedAreaChart}/>
									<Route path="/stacked-area-100-chart" component={StackedArea100Chart}/>
									
									<Route path="/column-chart" component={ColumnChart}/>
									<Route path="/bar-chart" component={BarChart}/>
									<Route path="/range-column-chart" component={RangeColumnChart}/>
									<Route path="/stacked-column-chart" component={StackedColumnChart}/>
									<Route path="/stacked-column-100-chart" component={StackedColumn100Chart}/>
									<Route path="/range-bar-chart" component={RangeBarChart}/>
									<Route path="/stacked-bar-chart" component={StackedBarChart}/>
									<Route path="/stacked-bar-100-chart" component={StackedBar100Chart}/>
									<Route path="/waterfall-chart" component={WaterfallChart}/>
									
									<Route path="/pie-chart" component={PieChart}/>
									<Route path="/pie-chart-index-label" component={PieChartWithCustomization}/>
									<Route path="/doughnut-chart" component={DoughnutChart}/>
									<Route path="/funnel-chart" component={FunnelChart}/>
									<Route path="/funnel-chart-with-custom-neck" component={FunnelChartWithCustomNeck}/>
									<Route path="/pyramid-chart" component={PyramidChart}/>
									
									<Route path="/candlestick-chart" component={CandlestickChart}/>
									<Route path="/ohlc-chart" component={OhlcChart}/>
									
									<Route path="/scatter-chart" component={ScatterChart}/>
									<Route path="/scatter-chart-with-custom-marker" component={ScatterChartWithCustomMarkers}/>
									<Route path="/bubble-chart" component={BubbleChart}/>
									
									<Route path="/box-whisker-chart" component={BoxAndWhiskerChart}/>
									<Route path="/box-whisker-chart-with-customization" component={BoxAndWhiskerChartWithCustomization}/>
									
									<Route path="/error-chart" component={ErrorChart}/>
									<Route path="/error-line-chart" component={ErrorLineChart}/>
									<Route path="/pareto-chart" component={ParetoChart}/>
									<Route path="/column-line-area-chart" component={ColumnLineAreaChart}/>
									
									<Route path="/dynamic-line-chart" component={DynamicLineChart}/>
									<Route path="/dynamic-column-chart" component={DynamicColumnChart}/>
									<Route path="/dynamic-multi-series-chart" component={DynamicMultiSeriesChart}/>
																		
									
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;