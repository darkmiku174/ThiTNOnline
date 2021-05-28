import React, {useState, useEffect} from "react";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Link, withRouter} from "react-router-dom";
import Breadscrumbs from "./Breadscrumbs";
import DropdownMenu from './DropdownMenu'

const Header = (props) => {
  const {
    history,
    location: {pathname},
  } = props;
  const pushToHome = (home) => {
    history.push(home)
  }

  return (
    <header>
      <Navbar
        bg="primary"
        expand="lg"
        style={{
          width: "90%",
          margin: "auto",
          boxShadow: "none",
          display: "flex", justifyContent: "space-between"
        }}
      >
        <Navbar.Brand href="/">React-Bootstrap </Navbar.Brand>
        <DropdownMenu pushToHome={pushToHome} />
      </Navbar>
      {console.log(pathname)}
      {pathname == "/giangvien/login" ? "" : pathname == "/" ? "" : <Breadscrumbs />}
    </header>
  );
};

export default withRouter(Header);
