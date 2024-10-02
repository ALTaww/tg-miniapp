import React from "react";
import { Link } from "react-router-dom";
import "./buttons.css";
import { paths } from "../../paths";
const SettingsButton = () => {
  return (
    <Link to={paths.ShopSettings} className="button settings-button">
      Settings
    </Link>
  );
};

export default SettingsButton;
