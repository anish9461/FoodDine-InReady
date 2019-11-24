import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "../css/tab.css";
import mapmarker from "../marker.svg";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYW5pc2hua3IiLCJhIjoiY2szY2dyN2pxMG1hdDNvcGJ6Nm40eDhnbyJ9.hDogBTynjbFQ_K4y7AcaFg"
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      center: [-0.1148677, 51.5139573],
      isLoggedIn: false
    };
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }


  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  clicked = (tabs) => {
    console.log(tabs);
    this.props.history.push("/" + tabs);
  };
  x = [-0.1148677, 51.5139573];

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn)
    let button;

    if (isLoggedIn) {
      button = <Tab eventKey="logout" title="Log Out" onClick={this.handleLogoutClick}></Tab>;
    } else {
      button = <Tab eventKey="login" title="Log In" onClick={this.handleLoginClick}></Tab>;
    }

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
          {button}
          
        </Tabs>
        <Map
          center={[-76.1474, 43.0481]}
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
          <Marker coordinates={[-76.1474, 43.0481]} anchor="bottom">
            <img src={mapmarker} height="40" width="40" alt="" />
          </Marker>
        </Map>
      </div>
    );
  }
}

export default Dashboard;
