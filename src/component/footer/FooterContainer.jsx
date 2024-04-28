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
    <Container className="footerContainer">
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column">
          <Row>
          <p className="mt-2 footer-copy">Social networks</p>
           <ul  className="footer-ul">
              <li className="footer-li">
                Facebook
              </li>
              <li className="footer-li">
                Twitter
              </li>
              <li className="footer-li">
                Instagram
              </li>
           </ul>
          </Row>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column">
        <Row>
          <p className="mt-2 footer-copy">You need help?</p>
            <p className="footer-des">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
            </p>
        </Row> 
        </Col>
      </Row>
      <p className="mt-2 footer-copy">Copyright (c)- Burger Now 2024</p>
  </Container>);
};

export default FooterContainer;
