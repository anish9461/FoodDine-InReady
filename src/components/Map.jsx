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
  // send the restaurant information to the 2D map as props
  console.log('Clicked');
  console.log(e.target.id)
  ////
  var restaurant = this.state.data.filter(res => res.name === e.target.id) 
  console.log(restaurant[0])
  this.props.history.push('/restaurant2d',restaurant[0]);
  // this.props.history.push('/restaurant2d');
}
getRestaurants = async () => {
  let res = await axios.get("https://fooddinein--ready.herokuapp.com/restaurant");
  this.setState(
    {
      'data' : res.data
    }
  )
};

  render() {
    if(this.state.data){
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
        {console.log(this.state.data)}
        {/* : map the markers on the map */}
        {this.state.data.map(data => {
        return(
          <Marker style={{cursor : 'pointer'}} coordinates={[data['locationX'], data['locationY']]} anchor="bottom" onClick={this.markerClick}>
          <img id={data['name']} src={mapmarker} height="40" width="40" alt=""  />
        </Marker>
        )
        })}
        {/* <Marker style={{cursor : 'pointer'}} coordinates={[-76.1474, 43.0481]} anchor="bottom" onClick={this.markerClick}>
          <img src={mapmarker} height="40" width="40" alt="" />
        </Marker> */}
      </Map>
    );
      }
      else{
        return null
      }
  }
}

export default MapComponent;
