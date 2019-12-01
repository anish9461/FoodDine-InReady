import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "../../css/selectform.css";
import "react-datepicker/dist/react-datepicker.css";
import TabsComponent from "../TabsComponent";
import { Form, Input, FormGroup, Container, Label } from "reactstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";


class RestaurantEdit extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      disabled: false,
      defaultCheck: false,
      parkingSlots: ["Park slot 1", "Park slot 2", "Park slot 3"],
      preorderMenu: ["Chicken Steak", "Veg Steak", "Pizza"],
      parkingSlot: "",
      preorder: [],
      date: ""
    };
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onOrderChange = e => {
    if (document.getElementById(e.target.name).checked) {
      console.log(this.state.preorder);
      this.setState(prevState => ({
        preorder: [...this.state.preorder, e.target.name]
      }));
      console.log(this.state.preorder);
    } else {
      var index = this.state.preorder.indexOf(e.target.name);
      console.log(index);
      console.log(this.state.preorder);
      var temp = this.state.preorder;
      temp.splice(index, 1);
      console.log(temp);
      this.setState(prevState => ({ preorder: temp }));
      console.log(this.state.preorder);
    }
  };

  onChange(e) {
    console.log("Checkbox checked:", e.target);
  }

  onCheckChange(e) {
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
  componentDidMount() {
    console.log("component mount");
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
    this.setState({
      startDate: date,
      date: date
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#344955", height: "100vh" }}>
        <TabsComponent history={this.props.history} />
        <Form>
          <div className="form-align">
           

            <FormGroup>
              <div className="form-align" style={{ marginTop: "40px" }}>
                <h2 className="form-align" style={{ color: "#f05e0a" }}>
                  Choose Parking
                </h2>
                {this.state.parkingSlots.map(slot => (
                  <label style={{ marginTop: "10px" }}>
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
                  <label>
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
  }
}

export default RestaurantEdit;