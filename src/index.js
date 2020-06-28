
import React from "react";
import { ToastContainer } from 'react-toastify';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/style.scss?v1.1.0";

import IndexForm from "views/Index.js";
import Starter from "views/pages/Starter.js";
import Growth from "views/pages/Growth.js";
import Impact from "views/pages/Impact.js";


ReactDOM.render(
  <BrowserRouter>

    <ToastContainer autoClose={3000} />
    <Switch>
      <Route
        path="/" 
        exact   
      >
        <IndexForm/>
      </Route>

      <Route
        path="/start"
        exact
      >
        <Starter/>
      </Route>

      <Route 
        path="/growth" 
        exact
      >
        <Growth/>
      </Route>

      <Route
        path="/impact"
        exact
      >
        <Impact />
      </Route>
      
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
