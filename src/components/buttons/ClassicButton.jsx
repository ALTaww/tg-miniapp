import React from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

const ClassicButton = (props) => {
  return (
    <Link to={props.path} className="button classic-button">
      {props.children}
    </Link>
  );
};

export default ClassicButton;
