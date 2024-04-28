import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HomeStyle.css'
import burger from '../../assets/burger_home.svg'
import info_burger from '../../assets/info_burger.svg'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'

import delivery from '../../assets/delivery.svg'

import Image from 'react-bootstrap/Image';
import burgerList from './burgerList'; 
import Card from 'react-bootstrap/Card';
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
    <Row className="justify-content-center"> 
        <Col xs={12} md={6} className="text-center"> 
        <p className="mt-2 home-contact-title">Home</p>
        <Image src={delivery} fluid/>
          <Container>
            <Row className="align-items-center justify-content-center">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Call us at:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted card-subtitle">
                  9988776655
                </Card.Subtitle>
              </Card.Body>
            </Card>
            
            </Row>
            <Row className="align-items-center justify-content-center">
             
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Write to us at:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted card-subtitle">
                  <span className="icon-contact">+91 889004455</span>
                </Card.Subtitle>
              </Card.Body>
            </Card>

            </Row>
          </Container>
        </Col>
        <Col xs={12} md={6} className="text-center">
        <p className="mt-2 home-contact-title">Restaurants</p>
      
        <Card className="d-flex flex-row res-card">
        <Card.Img variant="top" src={one} className="res-car-img" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card className="d-flex flex-row res-card">
        <Card.Img variant="top" src={two} className="res-car-img" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card className="d-flex flex-row res-card">
        <Card.Img variant="top" src={three} className="res-car-img" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HomePage;
