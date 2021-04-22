import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";
import * as routes from "../constants/routes";

//nav stuff
import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import See from './See'
import Upload from './Upload'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navigations from '../containers/Navigations'

import withAuthentication from "./withAuthentication";

const App = () => (
  <BrowserRouter>
    {/* <Container> */}
    <div>
      <Navigation />
      {/* <Navigations /> */}


      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.SEE} component={See} />
      <Route exact path={routes.UPLOAD} component={Upload} />
    {/* </Container> */}
    </div>
  </BrowserRouter>
);
export default withAuthentication(App); //using HoC to handle session

