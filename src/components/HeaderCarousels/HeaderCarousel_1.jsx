import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../assets/img/img.jpg";

const HeaderCarousel_1 = () => {
  return (
    <div className="header-carousel">
      <Carousel interval={null}>
        <Carousel.Item>
          <img src={ExampleCarouselImage} alt="img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={ExampleCarouselImage} alt="img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={ExampleCarouselImage} alt="img" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderCarousel_1;
