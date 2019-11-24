import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import MapComponent from "../components/Map";
import bgimage from "../backgroundimages/restaurant-1.jpg";


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

  render() {
    return (
      <div>
        <img src={bgimage} id="bg" alt="" />
        <TabsComponent history={this.props.history} />

        <div className="dashboard">
          <MapComponent />
        </div>
      </div>
    );
  }
}

export default Dashboard;
