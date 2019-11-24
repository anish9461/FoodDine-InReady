import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import "../css/tab.css";

class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
      //console.log(this.props)
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  clicked = tabs => {
    console.log(this.props);
    this.props.history.push("/" + tabs);
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn);
    let button;

    if (isLoggedIn) {
      button = (
        <Tab
          eventKey="logout"
          title="Log Out"
          onClick={this.handleLogoutClick}
          tabClassName="tab"
        ></Tab>
      );
    } else {
      button = (
        <Tab
          eventKey="login"
          title="Log In"
          onClick={this.handleLoginClick}
          tabClassName="tab"
        ></Tab>
      );
    }

    return (
      <div className="tab-list">
        <Tabs activeKey={this.props.activeKey} onSelect={this.clicked}>
            {console.log(this.props)}
          <Tab eventKey="home" title="Home" tabClassName="tab"></Tab>
          <Tab
            eventKey="restaurant"
            title="Restaurants"
            tabClassName="tab"
          ></Tab>
          <Tab eventKey="about" title="About" disabled tabClassName="tab"></Tab>
          {button}
        </Tabs>
      </div>
    );
  }
}

export default TabsComponent;
