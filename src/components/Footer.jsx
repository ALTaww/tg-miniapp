import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="colon">
          <Link to={"https://github.com/ALTaww/tg-miniapp"} target="_blank">
            <Icon icon="mdi:github" /> Github
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
