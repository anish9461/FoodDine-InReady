import React, { Component } from "react";
import axios from "axios";
import "../../css/tab.css";
import TabsComponent from "../TabsComponent";
import "../../css/dashboard.css";
import bgimage from "../../images/restaurant-1.jpg";
import "../../css/restaurantlist.css";
import { height } from "dom-helpers";

class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }

  render() {
      if(sessionStorage.getItem("isLoggedIn")==="true"){
    return (
      <div style={{ backgroundColor: "#344955", height: "100%" }}>
        {/* <img src={bgimage} id="bg" alt="" /> */}
        <TabsComponent history={this.props.history} activeKey="restaurant"/>
        <div className="restaurantlist">
          <div className="restaurantlist2">
            <h2 style={{ color: "#f05e0a" }}>Alto Cinco</h2>
            <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
              Address :
              <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                
                717 Downtown
              </span>
            </h3>
            <h3 style={{ color: "#f05e0a" }}>
              Restaurant Timings : 
              <span style={{ color: "#F9AA33" }}> 6pm to 12pm</span>
            </h3>
            <h3 style={{ color: "#f05e0a"}}>
              Contact : 
              <span style={{ color: "#F9AA33", marginLeft: "100px" }}> 315-466-8974</span>
            </h3>
          </div>
        </div>
      </div>
    );}else return null;
  }
}

export default AdminList;
