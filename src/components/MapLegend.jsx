import Table from "../components/Table";
import React, { Component } from "react";
import "../css/map.css";

class MapLegend extends Component {
  constructor(props) {
    // props.sensor is a Sensor.js
    super(props);
    // console.log(`'The props: ${JSON.stringify(props)}`);
    this.state = {
      isToggle: this.props.isToggle,
      sensor: this.props.sensor
    };
    this.onhover = this.onhover.bind(this);
    this.mouseout = this.mouseout.bind(this);
    if (this.props.sensor) {
      this.state.sensor = this.props.sensor;
      this.state.isToggle = this.props.isToggle;
    }
  }

  componentDidMount = () => {};

  onhover = () => {
    this.refs.totip.innerHTML = "";
    this.refs.totip.innerHTML +=
      "<span style='color: red;'>Capacity:</span><br>";
    this.refs.totip.innerHTML += `<span style='color: black;'>4</span><br><br>`;

    this.refs.totip.style.visibility = "visible";
    this.refs.totip.style.opacity = "1";
  };

  mouseout = () => {
    this.refs.totip.style.visibility = "hidden";
    this.refs.totip.style.opacity = "0";
  };

  render = () => {
    let renderSensor;
    if (this.props) {
      if (this.props !== "") {
        //   const location = JSON.parse(this.props.sensor.location);
        //   var x_axis = location.mapPlots.x;
        //   var y_axis = location.mapPlots.y;

        renderSensor = React.createElement(Table, null, null);
      } else {
        return null;
      }
    } else {
      return null;
    }
    return (
      <div
        onMouseOver={this.onhover}
        onMouseOut={() => this.mouseout()}
        //   onClick={() => {
        //     // console.log(`the sensor from bmap to detail? ${JSON.stringify(this.state.sensor)}`);
        //     this.props.history.push({
        //       pathname: `/admin/sensor/${this.state.sensor.getDeviceId()}`,
        //       state: this.state.sensor.rawSensor
        //     });
        //   }}
        onClick={() => {
          this.props.history.push("/selectform", this.props.data);
        }}
        style={{
          position: "absolute",
          left: this.props.x,
          top: this.props.y,
          cursor: "pointer"
        }}
      >
        <span ref="totip" id="tooltiptext" />
        {renderSensor}
      </div>
    );
  };
}

export default MapLegend;
