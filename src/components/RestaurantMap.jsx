import React, { Component } from "react";
import axios from "axios";
import "../css/tab.css";
import TabsComponent from "../components/TabsComponent";
import "../css/map.css";
import "../css/widgets.css";
import MapComponent from "../components/Map";
import resimg from "../images/restaurant2d.PNG";
import bgimage from "../images/restaurant-1.jpg";
import MapLegend from "../components/MapLegend";

class RestaurantMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    // axios.get(`http://localhost:8080/cart`).then(res => {
    //   console.log(res.data);
    // });
  }

componentWillMount(){
  //axios get to get tables
  this.getTable();
}

getTable = async () => {
  let res = await axios.get("https://fooddinein--ready.herokuapp.com/restaurant/tables/searchByEmail?email="+this.props.history.location.state.email);
  this.setState(
    {
      'data' : res.data
    }
  )
};
  render() {
    if(this.state.data)
    {
    return (
      <div style={{ backgroundColor: "#232F34"}}>
        <TabsComponent history={this.props.history} />
        {/* <img src={bgimage} id="bg" alt="" /> */}
        {/* <img src={resimg} id="RestaurantMap" alt="" /> */}

        {/* <img src={resimg} className="restaurantbg" alt="" /> */}
        <div style={{position: "relative"}} className="test">
          
          <h2 style={{color: '#f05e0a'}}>{sessionStorage.getItem('restaurantName')}</h2>
          <img src={resimg} width="50%" alt="" />
     
          {this.state.data.map(res => {
      
            return(
             
              <MapLegend history={this.props.history} data={res} x={res['tableX']} y={res['tableY']}/>
              
            )
          })}
            {/* <MapLegend history={this.props.history} x="550px" y="200px"/> */}
    
        </div>

        {/* <div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">Add Call to Action</a></div> */}
      </div>
    );
        }
        else{
          return null
        }
  }
}

export default RestaurantMap;
