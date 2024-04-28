import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HomeStyle.css'
import burger from '../../assets/burger_home.svg'
import Image from 'react-bootstrap/Image';

const HomePage = () => {
  return (
    <Container className="homeRoot">
    <Row className="align-items-center justify-content-center"> 
      <Col xs={12} md={6} className="text-center"> 
        <p className="mt-4 mb-4 home-heading">The best<br/>burger</p>
        <Button as="input" type="button" value="Order Now" className="botton-home"/>{' '}
      </Col>
      <Col xs={12} md={6} className="text-center">
        <Image src={burger} fluid className="rotated-img"/>
      </Col>
    </Row>
  </Container>
  );
};

export default HomePage;
