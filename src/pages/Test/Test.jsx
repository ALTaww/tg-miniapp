import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ComponentHeader from "../../components/ComponentHeader";
import "../../css/test.css";

const Test = () => {
  const animationClass = "animate";
  const cardStyles = ["gradient", "line"];
  const hoverBorderStyles = ["line", "background"];
  return (
    <div id="test-page" className={`container`}>
      <ComponentHeader>
        Тут собраны разные стили для пользователей и приколы
      </ComponentHeader>
      <Row
        sm={2}
        md={3}
        lg={4}
        xl={5}
        xxl={6}
        className="row-cols-2 row-cols-xs-2 g-sm-4"
      >
        {cardStyles.map((styleClass, idx) => (
          <Col key={idx}>
            <Card className={`${styleClass} ${animationClass}`}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <div className="container">
            <div className="box" style={{ backgroundColor: "red" }}>
              1
            </div>
            <div className="box" style={{ backgroundColor: "green" }}>
              2
            </div>
            <div className="box" style={{ backgroundColor: "orange" }}>
              3
            </div>
            <div className="box" style={{ backgroundColor: "pink" }}>
              4
            </div>
            <div className="box" style={{ backgroundColor: "black" }}>
              5
            </div>
            <div className="box" style={{ backgroundColor: "yellow" }}>
              6
            </div>
          </div>
        </Col>
        <Col>
          <div className="box">
            <p>
              Just some text to fill emptiness lkafj klsjf falksj lksaj l;af
              ;saj
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <p className="gradient-text">Gradient Text</p>
      </Row>

      <Row>
        {hoverBorderStyles.map((hoverStyle, idx) => (
          <Col key={idx}>
            <div
              className={`${hoverStyle} ${animationClass} animate-hover from-bottom`}
            >
              <p>Hover me</p>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <div class="ramka-1">Рамка 1</div>
        </Col>
        <Col>
          <div class="ramka-2-wr">
            <div class="ramka-2">Рамка 2</div>
          </div>
        </Col>
        <Col>
          <div class="ramka-3">Рамка 3</div>
        </Col>
        <Col>
          <div class="ramka-4">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Рамка 4
          </div>
        </Col>
        <Col>
          <div class="ramka-5">Рамка 5</div>
        </Col>
        <Col>
          <div class="ramka-7">Рамка 7</div>
        </Col>
      </Row>
      <Row>
        <div class="centerBox">
          <div class="categoryWrapper">
            <h1>Bathrooms</h1>
            <button>
              <span>
                <span>
                  <span data-attr-span="Смотреть ассортимент">
                    Смотреть ассортимент
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
            <div class="text">ZACH SAUCIER</div>
          </svg>
        </div>
      </Row>

      <div class="box55 mb-3">
        <div class="block55">
          <svg xmlns="//www.w3.org/2000/svg" width="100%" height="100%">
            {" "}
            <line class="top" x1="0" y1="0" x2="900" y2="0"></line>{" "}
            <line class="left" x1="0" y1="460" x2="0" y2="-920"></line>{" "}
            <line class="bottom" x1="400" y1="460" x2="-600" y2="460"></line>{" "}
            <line class="right" x1="400" y1="0" x2="400" y2="1380"></line>{" "}
          </svg>
          <h3>D</h3>
          <span>2012</span> <span>Broccoli, Asparagus, Curry</span>
        </div>
        <div class="block55">
          <svg xmlns="//www.w3.org/2000/svg" width="100%" height="100%">
            {" "}
            <line class="top" x1="0" y1="0" x2="900" y2="0"></line>{" "}
            <line class="left" x1="0" y1="460" x2="0" y2="-920"></line>{" "}
            <line class="bottom" x1="400" y1="460" x2="-600" y2="460"></line>{" "}
            <line class="right" x1="400" y1="0" x2="400" y2="1380"></line>{" "}
          </svg>
          <h3>A</h3>
          <span>2013</span> <span>Arugula, Chickweed</span>
        </div>
        <div class="block55">
          <svg xmlns="//www.w3.org/2000/svg" width="100%" height="100%">
            {" "}
            <line class="top" x1="0" y1="0" x2="900" y2="0"></line>{" "}
            <line class="left" x1="0" y1="460" x2="0" y2="-920"></line>{" "}
            <line class="bottom" x1="400" y1="460" x2="-600" y2="460"></line>{" "}
            <line class="right" x1="400" y1="0" x2="400" y2="1380"></line>{" "}
          </svg>
          <h3>S</h3>
          <span>2014</span> <span>Strawberry, Lemon</span>
        </div>
      </div>

      <section class="svg-container">
        <h1>Hover me</h1>

        <svg class="circle" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse
              class="background"
              ry="60"
              rx="60"
              cy="62.5"
              cx="62.5"
              stroke-width="2"
            />
            <ellipse
              class="foreground"
              ry="60"
              rx="60"
              cy="62.5"
              cx="62.5"
              stroke-width="2"
            />
            <line class="line line1" x1="52" y1="62" x2="74" y2="62" />
            <line class="line line2" x1="52" y1="62" x2="74" y2="62" />
          </g>
        </svg>
      </section>
    </div>
  );
};

export default Test;
