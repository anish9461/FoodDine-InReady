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
import { PostData } from "../services/PostData";

//Load a startup page for login
class Startup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  //Render the component
  render() {
    //Response from google after signing in
    const responseGoogle = response => {
      console.log(response);
      console.log("axios post");
      // let userData = {
      //   firstName: response.w3.ofa,
      //   lastName: response.w3.wea,
      //   email: response.w3.U3
      // };

      let userData = {
        'firstName' : response.profileObj.givenName,
        'lastName' : response.profileObj.familyName,
        'email' : response.profileObj.email
      } 
      PostData("user", userData);

      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("useremail", userData["email"]);
      this.props.history.push("/home", { response: response });
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
