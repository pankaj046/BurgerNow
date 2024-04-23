import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftBanner from '../assets/main-img.png';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import './style/Home.css';

import burger1 from '../assets/burger1.jpg';
import burger2 from '../assets/burger2.jpg';
import burger3 from '../assets/burger3.jpg';
import burger4 from '../assets/burger4.jpg';

const Home = () => {
  const burgerTypes = [
    { name: 'Classic Burger', type: 'Vegetarian', price: '$5.99', image: burger1 },
    { name: 'Bacon Cheeseburger', type: 'Vegetarian', price: '$6.99', image: burger2 },
    { name: 'Veggie Burger', type: 'Vegetarian', price: '$4.99', image: burger3 },
    { name: 'Mushroom Swiss Burger', type: 'Vegetarian', price: '$7.99', image: burger4 },
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center flex-column">
          <Row>
            <span className="left-title">Make<br />Your<br />Burger</span>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <Image src={leftBanner} fluid />
        </Col>
      </Row>
      <Row className="burger-types justify-content-center mt-50">
        {burgerTypes.map((burger, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="burger-type p-2">
            <Card className="burger-card h-100">
              <Card.Img variant="top" src={burger.image} className="burger-img" />
              <Card.Body>
                <Card.Title>{burger.name}</Card.Title>
                <Card.Text>
                  <span className="burger-type">{burger.type}</span>
                  <span className="burger-price">{burger.price}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;