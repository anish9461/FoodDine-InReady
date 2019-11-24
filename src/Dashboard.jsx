import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styled from "styled-components";
import axios from "axios";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
// import { Tabs, Tab, Panel } from "@bumaga/tabs";
import "./css/tab.css";
import Test from "./App.js";
import { Redirect } from "react-router-dom";
import mapmarker from "./marker.svg";
// const Map;
//pk.eyJ1IjoiYW5pc2hua3IiLCJhIjoiY2szY2dyN2pxMG1hdDNvcGJ6Nm40eDhnbyJ9.hDogBTynjbFQ_K4y7AcaFg
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYW5pc2hua3IiLCJhIjoiY2szY2dyN2pxMG1hdDNvcGJ6Nm40eDhnbyJ9.hDogBTynjbFQ_K4y7AcaFg"
});

const Mark = styled.div`
  background-color: #e74c3c;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 4px solid #eaa29b;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/cart`).then(res => {
      console.log(res.data);
    });
  }

  clicked = tabs => {
    console.log(tabs);
    this.props.history.push("/" + tabs);
  };
  x = [-0.1148677, 51.5139573];

  render() {
    return (
      <div>
        <Tabs onSelect={this.clicked}>
          <Tab eventKey="home" title="Home" tabClassName="tab"></Tab>
          <Tab
            eventKey="restaurant"
            title="Restaurants"
            tabClassName="tab"
          ></Tab>
          <Tab eventKey="about" title="About" disabled tabClassName="tab"></Tab>
        </Tabs>
        <Map
        center={[-76.1474,43.0481]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "70vh",
            width: "70vw",
            alignContent: "centre"
          }}
        >
          {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'harbor-15' }}>
    <Feature coordinates={[-0.1148677, 51.5139573]} />
  </Layer> */}
          <Marker coordinates={[-76.1474,43.0481]} anchor="bottom">
            <img src={mapmarker} height="40" width="40" alt="" />
          </Marker>
        </Map>
      </div>
    );
  }
}

export default Dashboard;
