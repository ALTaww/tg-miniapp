import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import myImg from "../../assets/img/img.jpg";
import Carousel from "react-bootstrap/Carousel";

const Card_1 = () => {
  return (
    <>
      <Card className="card card-1">
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
        <button
          className="add-favorite"
          type="button"
          aria-label="Добавить в избранное"
        >
          <i class="bi bi-heart"></i>
        </button>
        <Card.Title>Card Title</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>123 руб.</ListGroup.Item>
          <ListGroup.Item>123 руб.</ListGroup.Item>
          <ListGroup.Item>Samus ce exprus ne minerul ha dol'che</ListGroup.Item>
        </ListGroup>
      </Card>
      <hr />
    </>
  );
};

export default Card_1;
