
import React from "react";
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
    <Switch>
      <Route
        path="/" 
        exact 
        render={props => <IndexForm {...props} />}
      />

      <Route
        path="/starter"
        exact
        render={props => <Starter {...props} />}
      />

      <Route 
        path="/growth" 
        exact 
        render={props => <Growth {...props} />} 
      />
      <Route
        path="/impact"
        exact
        render={props => <Impact {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
