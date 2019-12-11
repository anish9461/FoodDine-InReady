//////////////////////////////////////////////////////////////////////////
// TabsComponent.jsx - To navigate between the tabs on the application  //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import "../css/tab.css";

//Tabs component to switch between tabs
class TabsComponent extends Component {
  clicked = tabs => {
    if (tabs === "") {
      sessionStorage.setItem("isLoggedIn", "false");
    }
    this.props.history.push("/" + tabs);
  };

  //Render the component on page load
  render() {
    let button;
    if (sessionStorage.getItem("isLoggedIn")) {
      button = (
        <Tab
          eventKey=""
          title="Log Out"
          onClick={this.handleLogoutClick}
          tabClassName="tab"
        ></Tab>
      );
    }

    return (
      <div className="tab-list">
        <Tabs activeKey={this.props.activeKey} onSelect={this.clicked}>
          <Tab
            eventKey="restaurantedit"
            title="Restaurants Form"
            tabClassName="tab"
          ></Tab>
          <Tab
            eventKey="restaurantorders"
            title="Restaurant Orders"
            tabClassName="tab"
          ></Tab>
          {button}
        </Tabs>
      </div>
    );
  }
}

export default TabsComponent;
