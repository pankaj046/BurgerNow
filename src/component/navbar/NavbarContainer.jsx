import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Outlet } from 'react-router-dom';
import FooterContainer from '../footer/FooterContainer';
import icon from '../../assets/icon.svg'
import Image from 'react-bootstrap/Image';

const NavbarContainer = () => {
  const location = useLocation();

  return (
    <Container fluid className="container-full-height root-nav">
      <Row className="nav-row">
        <Navbar expand="lg" className="bg-body-tertiary nav" fixed="top">
          <Container>
            <Navbar.Brand href="/"><Image src={icon} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Nav.Link>
                <Nav.Link href="/menu" className={location.pathname === '/menu' ? 'nav-link active' : 'nav-link'}>Menu</Nav.Link>
                <Nav.Link href="/cart" className={location.pathname === '/cart' ? 'nav-link active' : 'nav-link'}>Cart</Nav.Link>
                <Nav.Link href="/profile" className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}>Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      <Row className="mt-5 outlet-container">
        <Outlet />
      </Row>

      <Row className="" sticky="bottom">
        <FooterContainer />
      </Row>
    </Container>
  );
};

export default NavbarContainer;
