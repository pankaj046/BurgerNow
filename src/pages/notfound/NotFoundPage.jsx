import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import icon from '../../assets/icon.svg'
import './NotFoundStyle.css'

const NotFoundPage = () => {
  return (
    <Container className="color-text-notfound">
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} className="text-center">
          <Image src={icon} className="img-fluid mb-4" />
          <h1 className="mb-4">Oops! Page Not Found</h1>
          <p className="mb-4">The page you are looking for might have been removed or its name changed or is temporarily unavailable.</p>
          <Link to="/" className="btn btn-primary botton-notfound">Go Back to Home</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
