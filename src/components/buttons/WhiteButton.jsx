import React from "react";
import { Link } from "react-router-dom";
import "./buttons.css";
const WhiteButton = (props) => {
  return (
    <Link
      {...props}
      to={props.path}
      className={`button white-button ${props.className}`}
    >
      {props.children}
    </Link>
  );
};

export default WhiteButton;
