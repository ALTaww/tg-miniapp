import React, { useEffect, useRef, useState } from "react";
import ExampleCarouselImage from "../../assets/img/img.jpg";

const HeaderCarousel_3 = () => {
  const carouselInnerRef = useRef();
  function flipLeft() {
    const currentScrollLeft = carouselInnerRef.current.scrollLeft;
    carouselInnerRef.current.scrollLeft =
      currentScrollLeft -
      carouselInnerRef.current.getBoundingClientRect().width;
  }

  function flipRight() {
    const currentScrollLeft = carouselInnerRef.current.scrollLeft;
    carouselInnerRef.current.scrollLeft =
      currentScrollLeft +
      carouselInnerRef.current.getBoundingClientRect().width;
  }

  return (
    <div className="header-carousel header-carousel-3">
      <div className="carousel">
        <div ref={carouselInnerRef} className="carousel-inner">
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
          <div className="carousel-item">
            <img src={ExampleCarouselImage} alt="img" />
          </div>
        </div>
        <span
          className="carousel-control-prev"
          role="button"
          tabIndex={0}
          href="#"
          onClick={flipLeft}
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
          <span className="visually-hidden">Предыдущее</span>
        </span>
        <span
          className="carousel-control-next"
          role="button"
          tabIndex={0}
          href="#"
          onClick={flipRight}
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <span className="visually-hidden">Следующее</span>
        </span>
      </div>
    </div>
  );
};

export default HeaderCarousel_3;
