import React from "react";
import { Navbar, Nav, Row } from "react-bootstrap";
import Footer from "../styled-components/Footer";
import Logo from "../static/youth_connection_logo.jpg";

const Layout = ({ children }) => (
  <div>
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <img src={Logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center">
          <Nav.Link href="#">HOME</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
          <Nav.Link href="#">HOW IT WORKS</Nav.Link>
          <Nav.Link href="#">ADD AN ORGANIZATION</Nav.Link>
          <Nav.Link href="#">CONTACT</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#">ORGANIZATION LOGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {children}
    <Footer>
      <Row>
        <div>&copy; High-Five</div>
      </Row>
      <Row>
        <div>About</div>
      </Row>
    </Footer>
  </div>
);

export default Layout;
