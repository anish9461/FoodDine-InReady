//////////////////////////////////////////////////////////////////////////
// RestaurantEdit.jsx - To edit and update the restaurant details       //
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
import axios from "axios";

//Restaurant edit react class to edit the restaurant details
class RestaurantEdit extends Component {
  constructor(props) {
    super(props);
    //state variables for the restaurant class
    this.state = {
      restaurantName: "",
      restaurantAddress: "",
      contact: "",
      timing: "",
      locationX: '-76.5474',
      locationY: '43.1081'
    };
    //functions to handle change in data and submit the data
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //function to submit the edited restaurant details
  handleSubmit = e => {
    e.preventDefault();
    alert("Details updated");
    console.log(this.state);
    var sendData = {
      name: this.state.restaurantName,
      resAddress: this.state.restaurantAddress,
      resTiming: this.state.timing,
      email: sessionStorage.getItem("email"),
      locationX: this.state.locationX,
      locationY: this.state.locationY,
      contact: this.state.contact
    };
    console.log(sendData);
    //send the data via axios class
    axios.put(
      "https://fooddinein--ready.herokuapp.com/restaurant/" + this.state.id,
      sendData
    );
  };

  onChange(e) {
    console.log("Checkbox checked:", e.target);
  }

  componentDidMount() {
    console.log("component mount");
  }

  componentWillMount() {
    axios
      .get(
        "https://fooddinein--ready.herokuapp.com/restaurant/searchByEmail?email=" +
          sessionStorage.getItem("email")
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          locationX: res.data.locationX,
          locationY: res.data.locationY,
          id: res.data.id,
          restaurantName: res.data.name,
          restaurantAddress: res.data.resAddress,
          contact: res.data.contact,
          timing: res.data.resTiming
        });
      });
  }

  //Change the value of the state on form change
  handleChange(event) {
    switch (event.target.name) {
      case "restaurantName": {
        console.log("restaurant Name");
        this.setState({ restaurantName: event.target.value });
        break;
      }
      case "restaurantAddress": {
        console.log("restaurant Address");
        this.setState({ restaurantAddress: event.target.value });
        break;
      }
      case "contact": {
        console.log("restaurant Contact");
        this.setState({ contact: event.target.value });
        break;
      }
      case "timing": {
        console.log("restaurant Timing");
        this.setState({ timing: event.target.value });
        break;
      }
      case "locationX": {
        console.log("restaurant locationX");
        this.setState({ locationX: event.target.value });
        break;
      }
      case "locationY": {
        console.log("restaurant locationY");
        this.setState({ locationY: event.target.value });
        break;
      }
    }
  }

  //Render the restaurant form component with tabs and necessary fields
  render() {
    return (
      <div style={{ backgroundColor: "#344955", height: "100vh" }}>
        <TabsComponent
          history={this.props.history}
          activeKey="restaurantedit"
        />
        <Form>
          <div className="form-align">
            <FormGroup>
              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Name : &nbsp; &nbsp;
                  <input
                    type="text"
                    name="restaurantName"
                    value={this.state.restaurantName}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Address : &nbsp;
                  <input
                    type="text"
                    name="restaurantAddress"
                    value={this.state.restaurantAddress}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Contact : &nbsp;
                  <input
                    type="text"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Timing : &nbsp; &nbsp;
                  <input
                    type="text"
                    name="timing"
                    value={this.state.timing}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  LocationX : &nbsp;
                  <input
                    type="text"
                    name="locationX"
                    value={this.state.locationX}
                    onChange={this.handleChange}
                  />
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  LocationY : &nbsp;
                  <input
                    type="text"
                    name="locationY"
                    value={this.state.locationY}
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
                  Update
                </button>
              </div>
            </FormGroup>
          </div>
        </Form>
      </div>
    );
  }
}

//Export the component to be used to index page
export default RestaurantEdit;
