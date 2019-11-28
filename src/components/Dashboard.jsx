import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import MapComponent from "../components/Map";
import bgimage from "../images/restaurant-1.jpg";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-0.1148677, 51.5139573]
    };
    console.log("props")
    console.log(this.props)
    console.log("end")
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
    
  }

  render() {
    return (
      <div style={{backgroundColor: '#232F34', height: '100vh'}}>
        {/* <img src={bgimage} id="bg" alt="" /> */}
        <TabsComponent history={this.props.history} islog={this.props.location.state.isLoggedIn} />

        <div className="dashboard">
          <MapComponent history={this.props.history}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
