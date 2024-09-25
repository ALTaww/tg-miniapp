import React from "react";
import "./card.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardsContainer = ({ Card }) => {
  return (
    <Container>
      <Row>
        <Col className="col-6">
          <Card />
        </Col>
        <Col className="col-6">
          <Card />
        </Col>
      </Row>
      <Row>
        <Col className="col-6">
          <Card />
        </Col>
        <Col className="col-6">
          <Card />
        </Col>
      </Row>
    </Container>
  );
};

export default CardsContainer;
