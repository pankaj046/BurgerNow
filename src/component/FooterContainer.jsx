import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterContainer = () => {
  return (
    <Container className="footer fixed-bottom">
      <Row>
        <Nav defaultActiveKey="/home" className="flex-row">
          <Nav.Link eventKey="disabled" disabled>2024. Burger Now</Nav.Link>
          <Nav.Link eventKey="link-1">Privacy Policy</Nav.Link>
          <Nav.Link eventKey="link-2">Terms & Conditions</Nav.Link>
        </Nav>
      </Row>
    </Container>
  );
};

export default FooterContainer;
