import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "../../css/selectform.css";
import "react-datepicker/dist/react-datepicker.css";
import TabsComponent from "../TabsComponent";
import { Form, Input, FormGroup, Container, Label } from "reactstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import ThankYou from "../ThankYou";
import { PostData } from "../../services/PostData";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { array } from "prop-types";

class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      disabled: false,
      defaultCheck: false,
      restaurantName: "",
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
    // console.log(this.state.date)
  //  const templateId = 'template_UOMxgYMC';
   // var message = 'Booking Date : ' + this.state.date ;
  //  this.sendFeedback(templateId, {date: message, from_name: 'FoodDine-InReady', reply_to: 'anish9461@gmail.com'})
    // console.log(this.state);

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
      // PostData("user",sentData)
      console.log(sentData);

      this.props.history.push("/thankyou");
    }
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

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

  onCheckChange(e) {
    // this.refs.datepicker.props.showTimeSelect = 'false'
    // this.refs.datepicker.props.includeTimes.push(setHours(setMinutes(new Date(), 0), 15))
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
  componentDidMount() {
    console.log("component mount");
    //this.refs.datepicker.props.includeTimes.push(setHours(setMinutes(new Date(), 0), 15))
    var incTime = this.refs.datepicker.props.includeTimes;
    console.log(this.props.location.state);
    //FIXME: If props.datetime === preincluded times, then remove it from preinclude time
    var datetime = this.props.location.state.datetime;
    // console.log(datetime)
    // console.log(incTime)
    // for(i in datetime array)
    // {
    //   for(j in this.refs.datepicker.props.includeTimes)
    //   {
    //     if i === j{
    //       remove datetime from includetime
    //var index = this.refs.datepicker.props.includeTimes.indexOf(i)
    //this.refs.datepicker.props.includeTimes.splice(index,1)
    //     }
    //   }
    // }
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
    console.log(typeof datetime[0]);
    // console.log(datetime)
    for (let i in datetime) {
      console.log(datetime[i]);
      if (datetime[i] === date.toString()) {
        console.log("Same");
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
                  // includeTimes={[(this.state.startDate,20),(this.state.startDate,18),(0,19),(0,20)]}
                  includeTimes={[
                    setHours(setMinutes(new Date(), 0), 18),
                    setHours(setMinutes(new Date(), 0), 19),
                    setHours(setMinutes(new Date(), 0), 20),
                    setHours(setMinutes(new Date(), 0), 21)
                  ]}
                  // timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>

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
    } else {
      return null;
    }
  }
}

export default SelectForm;
