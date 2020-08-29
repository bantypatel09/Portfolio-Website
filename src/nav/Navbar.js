import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {
  NavLink
} from "react-router-dom";

const Navigation = () => {

return(
  <Navbar bg="secondary" variant="dark" expand="lg">
    {/*<Navbar.Brand>Banty Patel</Navbar.Brand>*/}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav mx-auto text-center">
        <NavLink className='nav-link' exact to='/'>Home</NavLink>
        <NavLink className='nav-link' exact to='/school'>Education</NavLink>
        <NavLink className='nav-link' exact to='/projects'>Projects</NavLink>
        <NavLink className='nav-link' exact to='/extras'>Extras</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

}

export default Navigation;