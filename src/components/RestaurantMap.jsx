import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/map.css";
import "../css/widgets.css";
import MapComponent from "../components/Map";
import resimg from "../images/restaurant2d.PNG";
import bgimage from "../images/restaurant-1.jpg";
import MapLegend from "../components/MapLegend";

class RestaurantMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }



  render() {
    return (
      <div style={{ backgroundColor: "#232F34"}}>
        <TabsComponent history={this.props.history} />
        {/* <img src={bgimage} id="bg" alt="" /> */}
        {/* <img src={resimg} id="RestaurantMap" alt="" /> */}

        {/* <img src={resimg} className="restaurantbg" alt="" /> */}
        <div style={{position: "relative"}} className="test">
          <h2 style={{color: '#f05e0a'}}>Restaurant 2D Map</h2>
          <img src={resimg} width="50%" alt="" />
          {/* {console.log(this.props)}
          {this.props.restuarant.map(res => {
            {console.log(this.props.res)}
            // return(
             
            //   <MapLegend history={this.props.history} x="550px" y="200px"/>
              
            // )
          })} */}{console.log('times')}
            <MapLegend history={this.props.history} x="550px" y="200px"/>
    
        </div>

        {/* <div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">Add Call to Action</a></div> */}
      </div>
    );
  }
}

export default RestaurantMap;
