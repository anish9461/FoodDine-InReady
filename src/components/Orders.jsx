import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import "../css/restaurantlist.css";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getOrders();
    console.log("component will mount");
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
    // let userData = {}
    // let response = GetData('user',userData)
    // console.log("response")
    // console.log(response.data)
    this.getOrders();
  }
  getOrders = async () => {
    var getReq = { 'useremail' : sessionStorage.getItem('useremail')}
    let res = await axios.get("https://fooddinein--ready.herokuapp.com/orders",getReq);
    console.log(res.data);
  };
  render() {
    if(sessionStorage.getItem('isLoggedIn') === 'true')
    {
    return (
      <div style={{ backgroundColor: "#344955", height: "100vh" }}>
        {console.log("Loding")}
        {/* <img src={bgimage} id="bg" alt="" /> */}
        <TabsComponent history={this.props.history} activeKey="orders" />
        <div className="restaurantlist">
          <div className="restaurantlist2">
            <h2 style={{ color: "#f05e0a" }}>Alto Cinco</h2>
            <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
              Table :
              <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                table 2
              </span>
            </h3>
            <h3 style={{ color: "#f05e0a" }}>
              Booking Timing :
              <span style={{ color: "#F9AA33" }}> Date and Time</span>
            </h3>
            <h3 style={{ color: "#f05e0a" }}>
              Parking Slot :
              <span style={{ color: "#F9AA33", marginLeft: "30px" }}>
                {" "}
                Slot 1
              </span>
            </h3>
            <h3 style={{ color: "#f05e0a" }}>
              Preorder :
              <span style={{ color: "#F9AA33", marginLeft: "70px" }}>
                List of Orders
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
    }
    else{
      return null
    }
  }
}

export default Orders;
