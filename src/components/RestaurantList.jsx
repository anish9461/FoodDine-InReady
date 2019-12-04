import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/dashboard.css";
import "../css/restaurantlist.css";

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getRestaurants();
    console.log("component will mount");
  }

  componentDidMount() {}
  getRestaurants = async () => {
    let res = await axios.get(
      "https://fooddinein--ready.herokuapp.com/restaurant"
    );
    this.setState({
      data: res.data
    });
  };
  render() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      return (
        <div style={{ backgroundColor: "#344955", height: "100%" }}>
          {console.log(this.state.data)}
          {/* <img src={bgimage} id="bg" alt="" /> */}
          <TabsComponent history={this.props.history} activeKey="restaurant" />

          {/* {console.log(this.state.data)} */}
          {this.state.data.map(data => {
            return (
              <div className="restaurantlist">
                <div className="restaurantlist2" style={{ height: "100%" }}>
                  <h2 style={{ color: "#f05e0a" }}>{data["name"]}</h2>
                  <h3 style={{ color: "#f05e0a", marginRight: "10px" }}>
                    Address :
                    <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                      {data["resAddress"]}
                    </span>
                  </h3>
                  <h3 style={{ color: "#f05e0a" }}>
                    Restaurant Timings :
                    <span style={{ color: "#F9AA33" }}>
                      {" "}
                      {data["resTiming"]}
                    </span>
                  </h3>
                  <h3 style={{ color: "#f05e0a" }}>
                    Contact :
                    <span style={{ color: "#F9AA33", marginLeft: "100px" }}>
                      {" "}
                      {data["contact"]}
                    </span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RestaurantList;
