import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";

import Contact from "views/examples/Contact.js";
import About from "views/examples/About.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>  
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
         <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/contact-page"
        exact
        render={props => <Contact {...props} />}
      />
        <Route
        path="/about-page"
        exact
        render={props => <About {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
