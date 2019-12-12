//////////////////////////////////////////////////////////////////////////
// SelectForm.jsx - Component to choose and submit the order            //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "../../css/selectform.css";
import "react-datepicker/dist/react-datepicker.css";
import TabsComponent from "../TabsComponent";
import { Form, Input, FormGroup, Container, Label } from "reactstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { PostData } from "../../services/PostData";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

//react class component
class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      disabled: false,
      defaultCheck: false,
      restaurantName: "",
      parkingSlots: ["Park slot 1", "Park slot 2", "Park slot 3"],
      preorderMenu: ["Chicken Steak", "Sushi", "Pizza"],
      parkingSlot: "",
      preorder: [],
      date: ""
    };
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //submit the order on button click
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.date === "") {
      return;
    } else {
      //post request to order collection
      //with data
      var sentData = {
        restaurantName: sessionStorage.getItem("restaurantName"),
        datetime: this.state.date,
        parkingSlot: this.state.parkingSlot,
        preorder: this.state.preorder,
        tableName: this.props.history.location.state.tableName,
        email: this.props.history.location.state.email,
        userEmail: sessionStorage.getItem("useremail")
      };
      PostData("orders", sentData);
      console.log(sentData);

      this.props.history.push("/thankyou");
    }
  };

  //change form details on edit
  onOrderChange = e => {
    if (document.getElementById(e.target.name).checked) {
      this.setState(prevState => ({
        preorder: [...this.state.preorder, e.target.name]
      }));
    } else {
      var index = this.state.preorder.indexOf(e.target.name);
      var temp = this.state.preorder;
      temp.splice(index, 1);
      this.setState(prevState => ({ preorder: temp }));
    }
  };

  onChange(e) {
    console.log("Checkbox checked:", e.target);
  }

  //handle change in timings and date
  onCheckChange(e) {
    console.log(this.refs.datepicker.props.includeTimes);
    if (document.getElementById(e.target.name).checked) {
      this.setState({ parkingSlot: e.target.name });
      this.state.parkingSlots.map(slot => {
        if (slot !== e.target.name) {
          document.getElementById(slot).disabled = true;
        }
      });
    } else {
      this.setState({ parkingSlot: "" });
      this.state.parkingSlots.map(slot => {
        if (slot !== e.target.name) {
          document.getElementById(slot).disabled = false;
        }
      });
    }
  }

  state = {
    startDate: new Date()
  };
  toggle(e) {
    e.preventDefault();
    this.setState({
      disabled: false,
      defaultCheck: false
    });
  }

  handleChange = date => {
    var datetime = this.props.location.state.datetime;
    for (let i in datetime) {
      console.log(datetime[i]);
      if (datetime[i] === date.toString()) {
        alert("Booking not available");
        this.setState({
          startDate: null
        });
        return;
      }
    }

    this.setState({
      startDate: date,
      date: date
    });
  };

  //render the react component
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div style={{ backgroundColor: "#344955", height: "100vh" }}>
          <TabsComponent history={this.props.history} />

          <h2 className="form-align" style={{ color: "#f05e0a" }}>
            Select Date
          </h2>
          <Form>
            <div className="form-align">
              <div>
                <DatePicker
                  ref="datepicker"
                  value={this.state.startDate}
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  minDate={new Date()}
                  timeFormat="HH:mm"
                  timeIntervals={60}
                  includeTimes={[
                    setHours(setMinutes(new Date(), 0), 18),
                    setHours(setMinutes(new Date(), 0), 19),
                    setHours(setMinutes(new Date(), 0), 20),
                    setHours(setMinutes(new Date(), 0), 21)
                  ]}
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>

              <FormGroup>
                <div className="form-align" style={{ marginTop: "40px" }}>
                  <h2 className="form-align" style={{ color: "#f05e0a" }}>
                    Choose Parking
                  </h2>
                  {this.state.parkingSlots.map(slot => (
                    <label style={{ marginTop: "10px", color: "#ff1100" }}>
                      <Checkbox
                        name={slot}
                        id={slot}
                        onChange={this.onCheckChange}
                      />
                      &nbsp; {slot} &nbsp;
                    </label>
                  ))}
                </div>
                <div style={{ marginTop: "40px" }}>
                  <h2 className="form-align" style={{ color: "#f05e0a" }}>
                    Select Pre-Order Menu
                  </h2>
                  {this.state.preorderMenu.map(order => (
                    <label style={{ color: "#ff1100" }}>
                      <Checkbox
                        name={order}
                        id={order}
                        onChange={this.onOrderChange}
                      />
                      &nbsp; {order} &nbsp;
                    </label>
                  ))}
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
    } else {
      return null;
    }
  }
}

export default SelectForm;
