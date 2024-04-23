import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/footer.css'

const FooterContainer = () => {
  return (
    <Container className="footerContainer">
      <Row>
        <Nav defaultActiveKey="/home" className="flex-row footer-nav">
          <Nav.Link eventKey="disabled" disabled className="nav-link">2024. Burger Now</Nav.Link>
          <Nav.Link eventKey="link-1" className="nav-link">Privacy Policy</Nav.Link>
          <Nav.Link eventKey="link-2" className="nav-link">Terms & Conditions</Nav.Link>
        </Nav>
      </Row>
    </Container>
  );
};

export default FooterContainer;
