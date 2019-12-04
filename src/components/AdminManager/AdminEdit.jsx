import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "../../css/selectform.css";
import "react-datepicker/dist/react-datepicker.css";
import TabsComponent from "../TabsComponent";
import { Form, Input, FormGroup, Container, Label } from "reactstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import Axios from "axios";

class AdminEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    restaurantEmail:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    alert('Restaurant Added!')
    console.log(this.state);
    Axios.post("https://fooddinein--ready.herokuapp.com/restaurant",{"email":this.state.restaurantEmail}).then((res) => {
        console.log("pass");
    })
    .catch((error) => {
        alert("Restaurant already exists.");
    });
  };

  onChange(e) {
    console.log("Checkbox checked:", e.target);
  }

  componentDidMount() {
    console.log("component mount");
  }

  componentWillMount() {
   
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ restaurantEmail: event.target.value });
  }

  render() {
    if(sessionStorage.getItem("isLoggedIn")==="true"){
    return (
      <div style={{ backgroundColor: "#344955", height: "100vh" }}>
        <TabsComponent
          history={this.props.history}
          activeKey="adminedit"
        />
        <Form>
          <div className="form-align">
            <FormGroup>
              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Please add the restaurant email to grant access to: <br></br><br></br><br></br>
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
    );} else return null;
  }
}

export default AdminEdit;
