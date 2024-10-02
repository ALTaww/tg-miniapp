import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { paths } from "../paths";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import "./header.css";

const Header = () => {
  const [isShowOffcanvas, setIsShowOffcanvas] = useState(false);
  const closeOffcanvas = () => setIsShowOffcanvas(false);

  return (
    <header>
      <Navbar expand="false" className="bg-body-tertiary">
        <Container>
          <Link className="nav-link" to={paths.UserShops}>
            <i class="bi bi-person-circle"></i>
            Имя фамилия
          </Link>
          {/* <Link className="navbar-brand" to={paths.Home}>
            Наш Брэнд
          </Link> */}
          <Link className="nav-link" to={paths.Basket}>
            <i class="bi bi-basket"></i>
          </Link>
          <Navbar.Toggle onClick={() => setIsShowOffcanvas(true)} />
          <Offcanvas show={isShowOffcanvas} onHide={closeOffcanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to={paths.Home} onClick={closeOffcanvas}>
                Home
              </Link>
              <Link to={paths.UserShops} onClick={closeOffcanvas}>
                User Shops
              </Link>
              <Link to={paths.ShopManagement} onClick={closeOffcanvas}>
                Shop Management
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
