import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import mapmarker from "../marker.svg";


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

markerClick() {
  console.log('Clicked');
  this.props.history.push('/restaurant2d');
}
  
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
        {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'harbor-15' }}>
    <Feature coordinates={[-0.1148677, 51.5139573]} />
  </Layer> */}
        <Marker style={{cursor : 'pointer'}} coordinates={[-76.1474, 43.0481]} anchor="bottom" onClick={this.markerClick}>
          <img src={mapmarker} height="40" width="40" alt="" />
        </Marker>
      </Map>
    );
  }
}

export default MapComponent;
