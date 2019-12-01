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
      restaurantName: '',
      restaurantAddress: '',
      contact: '',
      timing: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    alert('Something was submitted')
    console.log(this.state);
    //FIXME: 
  };

//   onOrderChange = e => {
//     if (document.getElementById(e.target.name).checked) {
//       console.log(this.state.preorder);
//       this.setState(prevState => ({
//         preorder: [...this.state.preorder, e.target.name]
//       }));
//       console.log(this.state.preorder);
//     } else {
//       var index = this.state.preorder.indexOf(e.target.name);
//       console.log(index);
//       console.log(this.state.preorder);
//       var temp = this.state.preorder;
//       temp.splice(index, 1);
//       console.log(temp);
//       this.setState(prevState => ({ preorder: temp }));
//       console.log(this.state.preorder);
//     }
//   };

  onChange(e) {
    console.log("Checkbox checked:", e.target);
  }

//   onCheckChange(e) {
//     if (document.getElementById(e.target.name).checked) {
//       this.setState({ parkingSlot: e.target.name });
//       this.state.parkingSlots.map(slot => {
//         if (slot !== e.target.name) {
//           document.getElementById(slot).disabled = true;
//         }
//       });
//     } else {
//       this.setState({ parkingSlot: "" });
//       this.state.parkingSlots.map(slot => {
//         if (slot !== e.target.name) {
//           document.getElementById(slot).disabled = false;
//         }
//       });
//     }
//   }
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
  handleChange(event) {
      
      console.log()
      switch (event.target.name)
      {
        case 'restaurantName':{
            console.log("restaurant Name")
            this.setState({restaurantName: event.target.value});
            break;
        }
        case 'restaurantAddress':{
            console.log('restaurant Address')
            this.setState({restaurantAddress: event.target.value});
            break;
        }
        case 'contact':{
            console.log('restaurant Contact')
            this.setState({contact: event.target.value});
            break;
        }
        case 'timing':{
            console.log('restaurant Timing')
            this.setState({timing: event.target.value});
            break;
        }
      }
    
  }

  render() {
    return (
      <div style={{ backgroundColor: "#344955", height: "100vh" }}>
        <TabsComponent history={this.props.history} activeKey="restaurantedit"/>
        <Form>
          <div className="form-align">
            <FormGroup>
              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Name : &nbsp; &nbsp;
                  <input type="text" name="restaurantName" value={this.state.value} onChange={this.handleChange} />
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Address : &nbsp;
                  <input type="text" name="restaurantAddress" value={this.state.value} onChange={this.handleChange}/>
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Contact : &nbsp;
                  <input type="text" name="contact" value={this.state.value} onChange={this.handleChange}/>
                </label>
              </div>

              <div className="form-align" style={{ marginTop: "40px" }}>
                <label style={{ marginTop: "10px", color: "#f05e0a" }}>
                  Timing : &nbsp; &nbsp;
                  <input type="text" name="timing" value={this.state.value} onChange={this.handleChange}/>
                </label>
              </div>

              {/* <div className="form-align" style={{ marginTop: "40px" }}>
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
              </div> */}
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
