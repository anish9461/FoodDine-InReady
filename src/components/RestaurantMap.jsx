//////////////////////////////////////////////////////////////////////////
// RestaurantMap.jsx - Component to display the 2D map                  //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/map.css";
import "../css/widgets.css";
import resimg from "../images/restaurant2d.PNG";
import MapLegend from "../components/MapLegend";


class RestaurantMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    //axios get to get tables
    this.getTable();
  }

  //fetch the tables from the database and store in the state 'data'
  getTable = async () => {
    let res = await axios.get(
      "https://fooddinein--ready.herokuapp.com/restaurant/tables/searchByEmail?email=" +
        this.props.history.location.state.email
    );
    this.setState({
      data: res.data
    });
  };
  //render the component
  render() {
    if (this.state.data) {
      return (
        <div style={{ backgroundColor: "#232F34" }}>
          <TabsComponent history={this.props.history} />
          <div style={{ position: "relative" }} className="test">
            <h2 style={{ color: "#f05e0a" }}>
              {sessionStorage.getItem("restaurantName")}
            </h2>
            <img src={resimg} width="50%" alt="" />

            {this.state.data.map(res => {
              return (
                <MapLegend
                  history={this.props.history}
                  data={res}
                  x={res["tableX"]}
                  y={res["tableY"]}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default RestaurantMap;
