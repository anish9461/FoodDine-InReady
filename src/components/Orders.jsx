//////////////////////////////////////////////////////////////////////////
// Orders.jsx - Component to display the restaurant Orders              //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import "../css/restaurantlist.css";

//Orders class component
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  //Execute this before rendering the component
  componentWillMount() {
    this.getOrders();
    console.log("component will mount");
  }

  componentDidMount() {
    this.getOrders();
  }

  //Fetch the orders from the database
  getOrders = async () => {
    var getReq = { useremail: sessionStorage.getItem("useremail") };
    let res = await axios.get(
      "https://fooddinein--ready.herokuapp.com/orders/searchByUserEmail?userEmail=" +
        sessionStorage.getItem("useremail")
    );
    this.setState({
      data: res.data
    });
  };
  //render the component
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div style={{ backgroundColor: "#344955", height: "100vh" }}>
          {console.log(this.state.data)}
          <TabsComponent history={this.props.history} activeKey="orders" />
          {this.state.data.map(data => {
            return (
              <div className="restaurantlist">
                <div className="restaurantlist2">
                  <h2 style={{ color: "#f05e0a" }}>{data["restaurantName"]}</h2>
                  <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
                    Table :
                    <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                      {data["tableName"]}
                    </span>
                  </h3>
                  <h3 style={{ color: "#f05e0a" }}>
                    Booking Timing :
                    <span style={{ color: "#F9AA33" }}>
                      {" "}
                      {data["datetime"]}{" "}
                    </span>
                  </h3>
                  <h3 style={{ color: "#f05e0a" }}>
                    Parking Slot :
                    <span style={{ color: "#F9AA33", marginLeft: "30px" }}>
                      {" "}
                      {data["parkingSlot"]}
                    </span>
                  </h3>
                  <h3 style={{ color: "#f05e0a" }}>
                    Preorder :
                    <span style={{ color: "#F9AA33", marginLeft: "70px" }}>
                      {data["preorder"].map(pre => {
                        return (
                          <span style={{ marginRight: "10px" }}>{pre},</span>
                        );
                      })}
                    </span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Orders;
