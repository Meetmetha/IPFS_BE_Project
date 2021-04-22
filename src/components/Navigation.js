import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core'

import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

import AuthUserContext from "./AuthUserContext";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth userInfo={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationNonAuth = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>
      <Link to={routes.LANDING}> <div>IPFS</div></Link>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <Link to={routes.SIGN_IN}> <Button variant="contained" color="primary" >Sign In</Button></Link>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;

const NavigationAuth = ({ userInfo }) => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>
    <Link to={routes.LANDING}> <div>IPFS</div></Link>
    </NavbarBrand>
    <NavbarBrand>
    <Link to={routes.SEE}> <Button variant="contained" color="primary" >Download</Button></Link>
    </NavbarBrand>
    <NavbarBrand>
    <Link to={routes.UPLOAD}> <Button variant="contained" color="primary" >Upload</Button></Link>
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
        {/* <Link to={routes.SIGN_IN}> <Button variant="contained" color="primary" >Home</Button></Link> */}
        </NavLink>
      </NavItem>
      {userInfo.providerData[0].providerId === "facebook.com" ? null : (
        <NavItem>
          <NavLink>
          {/* <Link to={routes.SIGN_IN}> <Button variant="contained" color="primary" >Sign In</Button></Link> */}
          </NavLink>
        </NavItem>
      )}
      <NavItem>
        <SignOutButton />
      </NavItem>
    </Nav>
  </Navbar>
);

