import React, { useState } from "react";
import { Button } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "./../images/ashok-chakra.png";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="xl">
        <NavbarBrand href="/">
          <img src={logo} className="App-logo-small" alt="logo" />
        </NavbarBrand>
        <Nav>
          <Button className="mybtn" color="success" onClick={props.routeToLoginSelector}>
            Get Started
          </Button>
        </Nav>
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" >
          <Button className="mybtn" color="primary">
            Resources
          </Button>
          </Nav>
        </Collapse>

      </Navbar>
    </>
  );
};

export default NavigationBar;
