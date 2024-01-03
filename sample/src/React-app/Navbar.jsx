import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import { BsCart4 } from "react-icons/bs";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="Header sticky-top">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <h5 className="Brand"> Glass M5</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="Toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" id="Items">
            <Link to="/" className="link-style">
              <h5 className="Links">Home</h5>
            </Link>
            <Link to="/About" activeClassName="active" className="link-style">
              <h5 className="Links">About Us</h5>
            </Link>
            <Link
              to="/Services"
              activeClassName="active"
              className="link-style"
            >
              <h5 className="Links">Services</h5>
            </Link>
            <Link
              to="/Contacts"
              activeClassName="active"
              className="link-style"
            >
              <h5 className="Links">Contacts</h5>
            </Link>
            <Link to="/Cart" className="link-style">
              <h5 className="Links">{/* <BsCart4 /> */}</h5>
            </Link>
          </Nav>

          <Link
            to="/Message"
            style={{ marginRight: "35px" }}
            id="Items"
            className="link-style"
          >
            <h5 className="btn-primary" id="nav-button">
              Send message
            </h5>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
