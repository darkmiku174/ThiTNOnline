import React from "react";
import {
  Navbar
} from "react-bootstrap";
import {withRouter} from "react-router-dom";
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
    const redirectToProfile=(profile)=>{
        history.push(profile)
    }

  return (
    <header>
      <Navbar
        bg="primary"
        expand="lg"
        style={{
          padding:'2rem',
          width: "100%",
          margin: "auto",
          boxShadow: "none",
          height:'4rem',
          
          display: "flex", justifyContent: "space-between"
        }}
      >
        <Navbar.Brand href="/"><img src="https://i.imgur.com/WjXsoar.png" style={{width:'3rem',height:'3rem'}} alt="huflit"/> </Navbar.Brand>
        <DropdownMenu pushToHome={pushToHome} pathname={pathname} redirectToProfile={redirectToProfile}/>
      </Navbar>
      {pathname == "/giangvien/login" ? "" : pathname == "/" ? "" : <Breadscrumbs />}
    </header>
  );
};

export default withRouter(Header);
