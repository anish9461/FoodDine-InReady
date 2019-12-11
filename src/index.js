//////////////////////////////////////////////////////////////////////////
// index.js - To create the routes for all the pages                    //
// ver 1.0                                                              //
// Language:    Javascript, React Framework                             //
// FoodDine-InReady , CSE 687 - Object Oriented Design, Fall2019        //
// Source Author:      Anish Nesarkar,Suket Singh, Syracuse University  //
//////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import AdminList from "./components/AdminManager/AdminList";

import * as serviceWorker from "./serviceWorker";

import Startup from "./components/Startup";

import AdminEdit from "./components/AdminManager/AdminEdit";

//Create routes for the pages to be used
const routing = (
  <Router>
    <div>
      <Route exact={true} path="/" component={Startup} />
      <Route path="/adminedit" component={AdminEdit} />
      <Route path="/adminlist" component={AdminList} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
