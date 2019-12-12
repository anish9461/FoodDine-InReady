//////////////////////////////////////////////////////////////////////////
// ThankYou.jsx - Component to display the exit page of the application //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import "../css/background.css";
import ReactTimeout from "react-timeout";
import Spinner from "react-spinner-material";

//class component
class ThankYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
    this.onclick = this.onclick.bind(this);
  }

  componentDidMount() {
    this.props.setTimeout(this.onclick, 5000);
  }

  onclick = () => {
    this.props.history.push("/home");
  };
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div>
          <div className="bg-image">
            <img src={bgimage} id="b" alt="" height="100vh" />
          </div>

          <div className="bg-text">
            <h1 style={{ fontSize: "50px" }}>Thank You!</h1>
            <h2>Your Table is Booked</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Spinner
                size={50}
                spinnerColor={"purple"}
                spinnerWidth={8}
                visible={true}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ReactTimeout(ThankYou);
