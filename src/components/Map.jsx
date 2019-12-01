import React, { Component } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import mapmarker from "../marker.svg";
import axios from "axios";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYW5pc2hua3IiLCJhIjoiY2szY2dyN2pxMG1hdDNvcGJ6Nm40eDhnbyJ9.hDogBTynjbFQ_K4y7AcaFg"
});

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.markerClick = this.markerClick.bind(this)
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }

  componentWillMount(){
    this.getRestaurants();
    console.log("component will mount")
  }

markerClick(e) {
  //FIXME: send the restaurant information to the 2D map as props
  // console.log('Clicked');
  // console.log(e)
  // ////
  // var restaurant = this.state.data.filter(res => res.restaurantName === e.target.data) 
  // this.props.history.push('/restaurant2d',restaurant);
  this.props.history.push('/restaurant2d');
}
getRestaurants = async () => {
  let res = await axios.get("http://fooddinein--ready.herokuapp.com/user");
  this.setState(
    {
      'data' : res.data
    }
  )
};

  render() {
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
        FIXME: map the markers on the map
        {/* {this.state.data.map(data => {
        return(
          <Marker id={data['restaurantName']} style={{cursor : 'pointer'}} coordinates={[-76.1474, 43.0481]} anchor="bottom" onClick={this.markerClick}>
          <img src={mapmarker} height="40" width="40" alt="" />
        </Marker>
        )})} */}
        <Marker style={{cursor : 'pointer'}} coordinates={[-76.1474, 43.0481]} anchor="bottom" onClick={this.markerClick}>
          <img src={mapmarker} height="40" width="40" alt="" />
        </Marker>
      </Map>
    );
  }
}

export default MapComponent;
