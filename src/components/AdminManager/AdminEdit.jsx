//////////////////////////////////////////////////////////////////////////
// AdminEdit.jsx - To add new restaurants by the Admin                  //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import "../../css/selectform.css";
import "react-datepicker/dist/react-datepicker.css";
import TabsComponent from "../TabsComponent";
import { Form, Input, FormGroup, Container, Label } from "reactstrap";
import "rc-checkbox/assets/index.css";
import Axios from "axios";

//Class to add new restaurants
class AdminEdit extends Component {
  constructor(props) {
    super(props);
    //state to store the restaurant email
    this.state = {
      restaurantEmail: ""
    };
    //function to handle change in state and submit the form
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //submit the form on button click and update in the database
  handleSubmit = e => {
    e.preventDefault();
    alert("Restaurant Added!");
    console.log(this.state);
    Axios.post("https://fooddinein--ready.herokuapp.com/restaurant", {
      email: this.state.restaurantEmail
    })
      .then(res => {
        console.log("pass");
      })
      .catch(error => {
        alert("Restaurant already exists.");
      });
  };

  //update state on change of the data on the form
  handleChange(event) {
    this.setState({ restaurantEmail: event.target.value });
  }

  //Render the component
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div style={{ backgroundColor: "#344955", height: "100vh" }}>
          <TabsComponent history={this.props.history} activeKey="adminedit" />
          <Form>
            <div className="form-align">
              <FormGroup>
                <div className="form-align" style={{ marginTop: "40px" }}>
                  <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                    Please add the restaurant email to grant access to:{" "}
                    <br></br>
                    <br></br>
                    <br></br>
                    Restaurant Email : &nbsp; &nbsp;
                    <input
                      type="text"
                      name="restaurantEmail"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>

                <div className="form-align" style={{ marginTop: "40px" }}>
                  <button
                    type="submit"
                    className="button"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </FormGroup>
            </div>
          </Form>
        </div>
      );
    } else return null;
  }
}

//Export the react class to be used on index page
export default AdminEdit;
