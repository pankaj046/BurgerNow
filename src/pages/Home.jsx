import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftBanner from '../assets/main-img.png';
import Image from 'react-bootstrap/Image';
import './style/Home.css';

const Home = () => {
  return (
    <Container className="homeRoot w-80">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center flex-column">
          <Row>
            <span className="left-title">Make<br />Your<br />Burger</span>
          </Row>
        </Col>
        <Col xs={12} md={6} className="max-hed d-flex justify-content-center">
          <Image src={leftBanner} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
