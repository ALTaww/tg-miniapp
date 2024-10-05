import React, { useContext } from "react";
import { Context } from "..";
import { cardComponents, headerCarousels } from "../utils/consts";
import Card_1 from "../components/Cards/Card_1";
import HeaderCarousel_1 from "../components/HeaderCarousels/HeaderCarousel_1";
import CardsContainer from "../components/Cards/CardsContainer";
import Button from "react-bootstrap/esm/Button";
import { observer } from "mobx-react";
import HeaderCarouselsContainer from "../components/HeaderCarousels/HeaderCarouselsContainer";

const Home = () => {
  const { userStore } = useContext(Context);
  const { cardStyle, headerCarouselStyle } = userStore?.data;
  const [Card, HeaderCarousel] = [
    cardComponents[cardStyle] || Card_1,
    headerCarousels[headerCarouselStyle] || HeaderCarousel_1,
  ];

  return (
    <div>
      <HeaderCarouselsContainer Carousel={HeaderCarousel} />
      <hr />
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="secondary"
          onClick={() => (userStore.data.headerCarouselStyle = 1)}
        >
          Карусель 1
        </Button>
        <Button
          variant="secondary"
          onClick={() => (userStore.data.headerCarouselStyle = 2)}
        >
          Карусель 2
        </Button>
        <Button
          variant="secondary"
          onClick={() => (userStore.data.headerCarouselStyle = 3)}
        >
          Карусель 3
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="secondary"
          onClick={() => (userStore.data.cardStyle = 1)}
        >
          Карточки 1
        </Button>
        <Button
          variant="secondary"
          onClick={() => (userStore.data.cardStyle = 2)}
        >
          Карточки 2
        </Button>
        <Button
          variant="secondary"
          onClick={() => (userStore.data.cardStyle = 3)}
        >
          Карточки 3
        </Button>
      </div>
      <hr />
      <CardsContainer Card={Card} />
    </div>
  );
};

export default observer(Home);
