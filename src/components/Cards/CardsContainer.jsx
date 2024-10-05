import React from "react";
import "./card.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardsContainer = ({ Card }) => {
  return (
    <Row
      sm={2}
      md={3}
      lg={4}
      xl={5}
      xxl={6}
      className="row-cols-2 row-cols-xs-2 g-sm-4"
    >
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card />
        </Col>
      ))}
    </Row>
  );
};

export default CardsContainer;
