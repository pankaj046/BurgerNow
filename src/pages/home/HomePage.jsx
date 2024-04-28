import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HomeStyle.css'
import burger from '../../assets/burger_home.svg'
import info_burger from '../../assets/info_burger.svg'
import Image from 'react-bootstrap/Image';
import burgerList from './burgerList'; 

// import { BurgerDetails } from '../../component/burger-details/BurgerDetails'

const HomePage = () => {
  return (
    <>
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

    <Container className="homeMenu">
      <Row className="align-items-center justify-content-center home-menu-row">
        <p className="home-menu-title">Explore the menu</p>
       
      </Row>
    </Container>

    <Container className="homeInfo">
      <Row className="align-items-center justify-content-center"> 
        <Col xs={12} md={6} className="text-center"> 
         <Image src={info_burger} fluid/>
        </Col>
        <Col xs={12} md={6} className="text-center">
        <p className="mt-2 home-info-first">Try our new</p>
        <p className="mt-2 home-info-second">Burger With Veggies</p>
        <Button className="btn-info">order it here</Button>
        </Col>
      </Row>
    </Container>

    <Container className="homeContact">
    <Row className="align-items-center justify-content-center"> 
        <Col xs={12} md={6} className="text-center"> 

        </Col>
        <Col xs={12} md={6} className="text-center">
      
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HomePage;
