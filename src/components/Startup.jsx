//////////////////////////////////////////////////////////////////////////
// Startup.jsx - Login page for the application                         //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////


import React, { Component } from "react";
import "../css/dashboard.css";
import bgimage from "../images/restaurant-1.jpg";
import "../css/background.css";
import GoogleLogin from "react-google-login";
import axios from "axios";

//Load a startup page for login
class Startup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

  componentDidMount() {}
  //Render the component
  render() {
    //Response from google after signing in
    const responseGoogle = response => {
      console.log(response);
      console.log("axios post");

      axios
        .get(
          "https://fooddinein--ready.herokuapp.com/admin/searchByEmail?email=" +
            response.w3.U3
        )
        .then(getres => {
          console.log("get response");
          console.log(getres);
          sessionStorage.setItem("isLoggedIn", "true");
          this.props.history.push("/adminedit", { response: response });
        })
        .catch(err => {
          console.log("get error");
          alert("Wrong Credentials");
        });
    };
    return (
      <div>
        <div className="bg-image">
          <img src={bgimage} id="b" alt="" height="100vh" />
        </div>

        <div className="bg-text">
          <h1 style={{ fontSize: "50px" }}>FoodDine-InReady</h1>
          <GoogleLogin
            clientId="1040424542196-n7gajpjirdqcm10grpbk0kmvk8eav9ki.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
    );
  }
}

export default Startup;
