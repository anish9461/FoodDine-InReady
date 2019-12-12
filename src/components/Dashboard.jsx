//////////////////////////////////////////////////////////////////////////
// Dashboard.jsx - A google view map page to select the restaurant      //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import MapComponent from "../components/Map";

//Landing page after login for the user
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

 
//Render the dashboard page
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div style={{ backgroundColor: "#232F34", height: "100vh" }}>
          <TabsComponent history={this.props.history} />

          <div className="dashboard">
            <MapComponent history={this.props.history} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Dashboard;
