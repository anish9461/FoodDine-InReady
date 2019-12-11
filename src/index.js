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
import * as serviceWorker from './serviceWorker';
import Startup from './components/Startup';
import RestuarantEdit from './components/RestaurantManager/RestaurantEdit';
import RestaurantOrders from './components/RestaurantManager/RestaurantOrders';

//Create route paths for the respective pages 
const routing = (
    <Router>
      <div>
        <Route exact={true} path="/" component={Startup} />
        <Route path="/restaurantedit" component={RestuarantEdit} />
        <Route path="/restaurantorders" component={RestaurantOrders} />
      </div>
    </Router>
  )


ReactDOM.render(routing , document.getElementById('root'));

serviceWorker.unregister();
