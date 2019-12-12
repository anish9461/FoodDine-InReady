//////////////////////////////////////////////////////////////////////////
// Map.jsx - Component to display the restaurants on the google map     //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import mapmarker from "../marker.svg";
import axios from "axios";

//Access token from the MapboxGl API
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYW5pc2hua3IiLCJhIjoiY2szY2dyN2pxMG1hdDNvcGJ6Nm40eDhnbyJ9.hDogBTynjbFQ_K4y7AcaFg"
});

//map component class
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.markerClick = this.markerClick.bind(this);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

  //this function is executed before rendering the component
  componentWillMount() {
    this.getRestaurants();
    console.log("component will mount");
  }

  // send the restaurant information to the 2D map as props on Marker click
  markerClick(e) {
    var restaurant = this.state.data.filter(res => res.name === e.target.id);
    sessionStorage.setItem("restaurantName", restaurant[0].name);
    this.props.history.push("/restaurant2d", restaurant[0]);
    // this.props.history.push('/restaurant2d');
  }

  //fetch the restaurants from the database
  getRestaurants = async () => {
    let res = await axios.get(
      "https://fooddinein--ready.herokuapp.com/restaurant"
    );
    this.setState({
      data: res.data
    });
  };

  //render the component
  render() {
    if (this.state.data) {
      return (
        <Map
          center={[-76.1474, 43.0481]}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "80vh",
            width: "70vw",
            alignContent: "centre"
          }}
        >
          {/* : map the markers on the map */}
          {this.state.data.map(data => {
            return (
              <Marker
                style={{ cursor: "pointer" }}
                coordinates={[data["locationX"], data["locationY"]]}
                anchor="bottom"
                onClick={this.markerClick}
              >
                <img
                  id={data["name"]}
                  src={mapmarker}
                  height="40"
                  width="40"
                  alt=""
                />
              </Marker>
            );
          })}
        </Map>
      );
    } else {
      return null;
    }
  }
}

export default MapComponent;
