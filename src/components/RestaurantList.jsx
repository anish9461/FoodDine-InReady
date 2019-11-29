import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import "../css/restaurantlist.css";
import { height } from "dom-helpers";

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

componentWillMount(){
  this.getRestaurants();
  console.log("component will mount")
}

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
    // let userData = {}
    // let response = GetData('user',userData)
    // console.log("response")
    // console.log(response.data)
    this.getRestaurants();
  }
  getRestaurants = async () => {
    let res = await axios.get("http://fooddinein--ready.herokuapp.com/user");
    let { data } = res.data;
    console.log(res.data)
};
  render() {
    return (
      
      <div style={{ backgroundColor: "#344955", height: "100vh" }}>
        {console.log('Loding')}
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
    );
  }
}

export default RestaurantList;
