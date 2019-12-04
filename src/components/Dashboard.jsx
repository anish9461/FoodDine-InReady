import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import MapComponent from "../components/Map";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }

  componentWillMount() {
    // this.getRestaurants();
    console.log("component will mount");
  }

  // getRestaurants = async () => {
  //   let res = await axios.get("http://fooddinein--ready.herokuapp.com/restaurants");
  //   let { data } = res.data;
  //   console.log(res.data)
  // }

  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div style={{ backgroundColor: "#232F34", height: "100vh" }}>
          {/* <img src={bgimage} id="bg" alt="" /> */}
          <TabsComponent history={this.props.history} />

          <div className="dashboard">
            <MapComponent history={this.props.history} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Dashboard;
