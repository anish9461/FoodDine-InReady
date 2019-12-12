//////////////////////////////////////////////////////////////////////////
// index.js - To create routes for all the pages                        //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import RestaurantList from './components/RestaurantList';

import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
import RestaurantMap from './components/RestaurantMap';
import Startup from './components/Startup';
import SelectForm from './components/forms/SelectForm';
import ThankYou from './components/ThankYou';
import Orders from './components/Orders'

//Create route paths for the respective pages 
const routing = (
    <Router>
      <div>
        <Route exact={true} path="/" component={Startup} />
        <Route path="/restaurant" component={RestaurantList} />
        <Route path="/home" component={Dashboard} />
        <Route path="/restaurant2d" component={RestaurantMap} />
        <Route path="/selectform" component={SelectForm}/>
        <Route path="/thankyou" component={ThankYou}/>
        <Route path="/orders" component={Orders}/>
      </div>
    </Router>
  )


ReactDOM.render(routing , document.getElementById('root'));

serviceWorker.unregister();
