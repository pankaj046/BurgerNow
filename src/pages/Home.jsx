import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftBanner from '../assets/main-img.svg'
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    
                   

                </Col>
                <Col xs={12} md={6}>
                    <Image src={leftBanner} thumbnail/>{}
                </Col>
            </Row>
        </Container>
      );
}
export default Home;
