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
      'data' : []
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
   // this.getRestaurants();
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
    if(sessionStorage.getItem('isLoggedIn') === 'true')
    {
    return (
      
      <div style={{ backgroundColor: "#344955", height: "100%" }}>
        {console.log(this.state.data)}
        {/* <img src={bgimage} id="bg" alt="" /> */}
        <TabsComponent history={this.props.history} activeKey="adminlist"/>

        {/* {console.log(this.state.data)} */}
        {this.state.data.map(data => {
          return (
          <div className="restaurantlist">
          <div className="restaurantlist2" style={{height: '100%'}}>
            <h2 style={{ color: "#f05e0a" }}>{data['name']}</h2>
            <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
              Address : 
              <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                
              {data['resAddress']}
              </span>
            </h3>
            <h3 style={{ color: "#f05e0a" }}>
              Restaurant Timings : 
              <span style={{ color: "#F9AA33" }}> {data['resTiming']}</span>
            </h3>
            <h3 style={{ color: "#f05e0a"}}>
              Contact : 
              <span style={{ color: "#F9AA33", marginLeft: "100px" }}> {data['contact']}</span>
            </h3>
          </div>
        </div>
          )
        })}
        {/* <div className="restaurantlist">
          <div className="restaurantlist2">
            <h2 style={{ color: "#f05e0a" }}>Alto Cinco</h2>
            <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
              Address : 
              <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                
              {this.state.firstName}
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
        </div> */}
      </div>
    );
      }
      else{
        return null
      }
  }
}

export default AdminList;
