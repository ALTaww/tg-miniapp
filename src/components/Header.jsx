import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { paths } from "../paths";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import "./header.css";
import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();
  const [isShowOffcanvas, setIsShowOffcanvas] = useState(false);
  const closeOffcanvas = () => setIsShowOffcanvas(false);

  return (
    <header>
      <Navbar expand="false" className="bg-body-tertiary">
        <Container>
          <Link className="nav-link" to={paths.UserShops}>
            <i class="bi bi-person-circle"></i>
            <span className="name">
              {user?.username ? user?.username : `Имя фамилия`}
            </span>
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
              <Link to={paths.Test} onClick={closeOffcanvas}>
                Test
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
