import React, { useState } from "react";
import { Button } from "reactstrap";
import Logo from './logo';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  NavbarText,
} from "reactstrap";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="xl">
        <NavbarBrand href="/">
          <Logo />
        </NavbarBrand>
        {props.isGetStarted?(
          <Nav>
          <Button className="mybtn" color="success" onClick={props.routeToLoginSelector}>
            Get Started
          </Button>
        </Nav>
        ):(null)}
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" >
          <Button className="mybtn" color="primary">
            Resources
          </Button>
          </Nav>
        </Collapse>
        <NavbarText>Meditation Community</NavbarText>
      </Navbar>
    </>
  );
};

export default NavigationBar;
