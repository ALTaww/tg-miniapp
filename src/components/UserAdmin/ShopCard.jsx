import React from "react";
import shopImage from "../../assets/img/card-image.png";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import SettingsButton from "../buttons/SettingsButton";
import ClassicButton from "../buttons/ClassicButton";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";

const ShopCard = (props) => {
  return (
    <div className="shop-card">
      <div className="content">
        <div className="portrait">
          <img src={shopImage} alt={"img"} />
          <div className="description">
            <span className="name">{props.name}</span>
            <span
              className={`status ${
                props.industry === "users" ? "users" : "shop"
              }`}
            >
              {props.industry === "users" ? (
                <Icon className="icon" icon="icon-park-solid:peoples" />
              ) : (
                <Icon className="icon" icon="heroicons:shopping-bag-solid" />
              )}
              {props.status}
            </span>
          </div>
        </div>
        <div className="buttons">
          <Row>
            <Col>
              <SettingsButton />
            </Col>
            <Col>
              <ClassicButton path={paths.ShopDetails}>Open</ClassicButton>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
