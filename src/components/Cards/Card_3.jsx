import React from "react";
import Card from "react-bootstrap/Card";
import myImg from "../../assets/img/img.jpg";
import Carousel from "react-bootstrap/Carousel";

const Card_3 = () => {
  return (
    <Card className="card card-3">
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

      <Card.Body>
        <p>Samus ce exprus ne minerul ha dol'che</p>

        <input id="price" type="number" className="col-4" />
        <label for="price">P</label>
        <i class="plus bi bi-plus-circle"></i>
      </Card.Body>
    </Card>
  );
};

export default Card_3;
