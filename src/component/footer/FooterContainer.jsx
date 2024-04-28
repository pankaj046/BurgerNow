import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FooterContainer = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center flex-column">
          <Row>
            <p className="text-center mt-4 mb-4">Burger Now</p>
          </Row>
        </Col>
        <Col xs={12} md={6} className="max-hed d-flex justify-content-center">
        
        </Col>
      </Row>
  </Container>);
};

export default FooterContainer;
