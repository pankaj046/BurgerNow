import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/navbar.css';
import { FaPhone } from 'react-icons/fa'; 
import { WiAlien } from "react-icons/wi";
import { Outlet } from 'react-router-dom';

const NavbarContainer = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
      <Navbar.Brand href="/" className="brandLogo">B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link active">Discover</Nav.Link>
            <Nav.Link href="/make-burger">Make Your Burger</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
              <Nav.Link href="#home">  
                <span className="callText navCall">
                  <FaPhone className="callIcon flipped"/> Call Me Back
                </span>
              </Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
            <Nav.Link href="/profile" className="nav-avator">
                  <WiAlien className="avator" />
              </Nav.Link>     
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <Container>
          <Outlet/>
      </Container>
    </>
  );
};

export default NavbarContainer;
