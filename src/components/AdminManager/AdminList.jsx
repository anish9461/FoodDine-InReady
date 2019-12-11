//////////////////////////////////////////////////////////////////////////
// AdminList.jsx - To display all the restaurants added by admin        //
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

//List the restaurants added by the admin
class AdminList extends Component {
  constructor(props) {
    super(props);
    //store the fetched restaurant in the state data
    this.state = {
      data: []
    };
  }

  //Fetch all the restaurants from database before rendering the page
  componentWillMount() {
    this.getRestaurants();
    console.log("component will mount");
  }

  componentDidMount() {}

  //axios function to fetch all the restaurants and store in the state
  getRestaurants = async () => {
    let res = await axios.get(
      "https://fooddinein--ready.herokuapp.com/restaurant"
    );
    this.setState({
      data: res.data
    });
  };

  //Render the restaurants
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div style={{ backgroundColor: "#344955", height: "100vh" }}>
          {console.log(this.state.data)}

          <TabsComponent history={this.props.history} activeKey="adminlist" />

          {this.state.data.map(data => {
            return (
              <div className="restaurantlist">
                <div className="restaurantlist2" style={{ height: "100%" }}>
                  <h2 style={{ color: "#f05e0a" }}>{data["name"]}</h2>
                  <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
                    Address :
                    <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                      {data["resAddress"]}
                    </span>
                  </h3>
                  <h3 style={{ color: "#f05e0a" }}>
                    Restaurant Timings :
                    <span style={{ color: "#F9AA33" }}>
                      {" "}
                      {data["resTiming"]}
                    </span>
                  </h3>
                  <h3 style={{ color: "#f05e0a" }}>
                    Contact :
                    <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                      {" "}
                      {data["contact"]}
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

//Export the class to be used in the index page
export default AdminList;
