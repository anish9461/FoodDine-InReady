import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AdminList from './components/AdminManager/AdminList';
import Test from './axiostest';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
import bgimage from "./images/restaurant-1.jpg"
import RestaurantMap from './components/RestaurantMap';
import Startup from './components/Startup';
import SelectForm from './components/forms/SelectForm';
import AdminEdit from './components/AdminManager/AdminEdit';
import RestaurantOrders from './components/RestaurantManager/RestaurantOrders';

const routing = (
    <Router>
      <div>
        <Route exact={true} path="/" component={Startup} />
        <Route path="/adminedit" component={AdminEdit} />
        <Route path="/adminlist" component={AdminList} />
      </div>
    </Router>
  )


ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
