import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/navbar.css';
import { Outlet } from 'react-router-dom';
import FooterContainer from './FooterContainer';
import icon from '../assets/icon.svg';
import Image from 'react-bootstrap/Image';

const NavbarContainer = () => {
  return (
    <Container fluid className="container-full-height root-nav">
      <Row>
        <Navbar expand="lg" className="bg-body-tertiary nav" fixed="top">
          <Container>
            <Navbar.Brand href="/"><Image src={icon} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="/" className="nav-link active">Home</Nav.Link>
                <Nav.Link href="#" className="nav-link">Menu</Nav.Link>
                <Nav.Link href="#" className="nav-link">Cart</Nav.Link>
                <Nav.Link href="#" className="nav-link">Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row className="mt-5 outlet-container">
        <Col>
          <Outlet />
        </Col>
      </Row>

    <Row className="mt-5 pt-5">
      <Col>
        <FooterContainer />
      </Col>
    </Row>
    </Container>
  );
};

export default NavbarContainer;