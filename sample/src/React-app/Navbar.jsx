import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BsCart4 } from "react-icons/bs";
import "./Css/Navbar.css";

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
            <Nav.Link href="#home" >
              <h5 className="Links" >Home</h5>
            </Nav.Link>
            <Nav.Link href="#link"  activeClassName="active">
              <h5 className="Links" >About Us</h5>
            </Nav.Link>
            <Nav.Link href="#link"  activeClassName="active">
              <h5 className="Links" >Services</h5>
            </Nav.Link>
            <Nav.Link href="#link"  activeClassName="active">
              <h5 className="Links" >Contacts</h5>
            </Nav.Link>
            <Nav.Link href="#link">
              <h5 className="Links">
                <BsCart4 />
              </h5>
            </Nav.Link>
          </Nav>
          
          <Nav.Link href="#link" style={{ marginRight: "35px" }} id="Items"  >
            <h5 className="btn-primary" id="nav-button" >
              Send message
            </h5>
          </Nav.Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
