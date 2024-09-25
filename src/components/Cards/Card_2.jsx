import React from "react";
import Card from "react-bootstrap/Card";
import myImg from "../../assets/img/img.jpg";
import Carousel from "react-bootstrap/Carousel";

const Card_2 = () => {
  return (
    <Card className="card card-2">
      <Carousel interval={null}>
        <Carousel.Item>
          <Card.Img variant="top" src={myImg} alt="img" />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={myImg} alt="img" />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={myImg} alt="img" />
        </Carousel.Item>
      </Carousel>

      <Card.Body>123 руб.</Card.Body>
    </Card>
  );
};

export default Card_2;
