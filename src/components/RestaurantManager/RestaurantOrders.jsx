//////////////////////////////////////////////////////////////////////////
// RestaurantOrders.jsx - To view and confirm the restaurant orders     //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import axios from "axios";
import "../../css/tab.css";
import TabsComponent from "../TabsComponent";
import "../../css/dashboard.css";
import "../../css/restaurantlist.css";

//Restaurant order class to display the existing orders
class Restaurantorder extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Component called before rendering
  componentWillMount() {
    this.getOrders();
    console.log("component will mount");
  }

  componentDidMount() {
    this.getOrders();
  }

  //Send the cofirmation mail to the client
  handleSubmit = e => {
    console.log(e.target.id);
    alert("Email Notification Sent!");
    const templateId = "template_UOMxgYMC";
    axios
      .get("https://fooddinein--ready.herokuapp.com/orders/" + e.target.id)
      .then(response => {
        console.log(response.data["userEmail"]);
        var preord = "";
        for (var i in response.data["preorder"]) {
          console.log(response.data["preorder"][i]);
          preord = preord + response.data["preorder"][i] + ", ";
        }
        console.log(preord);
        var book = "Booking Date : " + response.data["datetime"];
        this.sendFeedback(templateId, {
          reply_to: response.data["userEmail"],
          restaurantName: response.data["restaurantName"],
          date: response.data["datetime"],
          preorder: preord,
          pslot: response.data["parkingSlot"],
          from_name: "FoodDine-InReady"
        });
      });
  };

  //Send email notification via emailjs library
  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  //Get all the orders for the restaurant
  getOrders = async () => {
    var getReq = { useremail: sessionStorage.getItem("useremail") };
    let res = await axios.get(
      "https://fooddinein--ready.herokuapp.com/orders/searchByEmail?email=" +
        sessionStorage.getItem("email")
    );
    let { data } = res.data;
    this.setState({
      data: res.data
    });
  };

  //Render the restaurant orders component
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true" && this.state.data) {
      return (
        <div style={{ backgroundColor: "#344955", height: "100vh" }}>
          <TabsComponent
            history={this.props.history}
            activeKey="restaurantorders"
          />

          {this.state.data.map(data => {
            console.log(data);
            return (
              <div className="restaurantlist">
                <div className="restaurantlist2">
                  <h2 style={{ color: "#f05e0a" }}>{data["restaurantName"]}</h2>
                  <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
                    Customer :
                    <span style={{ color: "#F9AA33", marginLeft: "60px" }}>
                      {data["userEmail"]}
                    </span>
                  </h3>
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
                      {data["datetime"]}
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
                  <div className="form-align" style={{ marginTop: "10px" }}>
                    <button
                      type="submit"
                      id={data["id"]}
                      className="button"
                      onClick={this.handleSubmit}
                      style={{ color: "white" }}
                    >
                      Confirm
                    </button>
                  </div>
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

//Export the component to be used in the index page
export default Restaurantorder;
