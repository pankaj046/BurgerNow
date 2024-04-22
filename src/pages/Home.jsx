import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftBanner from '../assets/main-img.svg'
import Image from 'react-bootstrap/Image';
import './style/Home.css'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="d-none d-md-flex justify-content-center align-items-center">
                    <Row>
                        <span className="left-title"> 
                            Make<br/>Your<br/>Burger
                        </span>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={leftBanner} fluid/>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;
