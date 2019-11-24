import React, { Component} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import axios from "axios";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import { Tabs, Tab, Panel } from "@bumaga/tabs";
import './css/tab.css'
import Test from './App.js';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  componentDidMount() {
    axios.get(`http://localhost:8080/cart`).then(res => {
      console.log(res.data);
    });
  }
  
 clicked = (tabs) => {
  console.log(tabs)
  this.props.history.push('/'+tabs);
    
   
 }

  render() {
    return (
<Tabs onSelect={this.clicked}>
<Tab eventKey="home" title="Home" tabClassName='tab'></Tab>
<Tab eventKey="restaurant" title="Restaurants" tabClassName='tab'></Tab>
<Tab eventKey="about" title="About" disabled tabClassName='tab'></Tab>
</Tabs>

    );
  }
}

export default Dashboard;
