//////////////////////////////////////////////////////////////////////////
// MapLegend.jsx - Component to display the tables on the 2D map        //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import Table from "../components/Table";
import React, { Component } from "react";
import "../css/map.css";

//class of the component
class MapLegend extends Component {
  constructor(props) {
    super(props);
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

  //display table details on mouse hover
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

  //Render the tables on the 2D map
  render = () => {
    let renderSensor;
    if (this.props) {
      if (this.props !== "") {
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
