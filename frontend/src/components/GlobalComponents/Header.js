import React, {useState, useEffect} from "react";
import {
  Navbar,
  Nav,
  Image,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Link, withRouter} from "react-router-dom";
import Breadscrumbs from "./Breadscrumbs";

const getWindowWidth = () => {
  const {innerWidth: w} = window;
  return w;
};

const Header = (props) => {
  const {
    history,
    location: {pathname},
  } = props;

  return (
    <header>
      <Navbar
        bg="primary"
        expand="lg"
        style={{width: "90%", margin: "auto", boxShadow: "none"}}
      >
        <Navbar.Brand href="/">React-Bootstrap </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/profile" className="expand">
              <Navbar.Text>
                <i className="fas fa-user" /> Profile{" "}
              </Navbar.Text>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {console.log(pathname)}
      {pathname != "/giangvien/login" ? <Breadscrumbs /> : ""}
    </header>
  );
};

export default withRouter(Header);
