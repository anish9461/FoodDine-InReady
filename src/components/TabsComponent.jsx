import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import "../css/tab.css";

class TabsComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log(this.props)
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }

  clicked = tabs => {
    if (tabs === "") {
      sessionStorage.setItem("isLoggedIn", "false");
    }
    this.props.history.push("/" + tabs);
  };

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
            eventKey="adminedit"
            title="Add Restaurant"
            tabClassName="tab"
          ></Tab>
          <Tab eventKey="adminlist" title="Restaurant List" tabClassName="tab"></Tab>
          {button}
        </Tabs>
      </div>
    );
  }
}

export default TabsComponent;
