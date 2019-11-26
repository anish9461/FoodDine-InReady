import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Test from './axiostest';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
import bgimage from "./images/restaurant-1.jpg"
import RestaurantMap from './components/RestaurantMap';
const routing = (
    <Router>
      <div>
      
        <Route exact={true} path="/" component={Dashboard} />
        <Route path="/restaurant" component={App} />
        <Route path="/home" component={Dashboard} />
        <Route path="/restaurant2d" component={RestaurantMap} />
      </div>
    </Router>
  )


ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
