import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Row } from "react-bootstrap";
import Footer from "../styled-components/Footer";
import styles from "./Layout.module.css";
import Logo from "../static/youth_connection_logo.jpg";

const Layout = ({ children }) => (
  <div>
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "white" }}
    >
      <Navbar.Brand href="#home">
        <img src={Logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <div className={styles.linkstyles}>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/howItWorks">HOW IT WORKS</Link>
            <Link to="#">ADD AN ORGANIZATION</Link>
            <Link to="/contact">CONTACT</Link>
          </div>{" "}
          <div></div>
        </Nav>
        <Nav>
          <div className={styles.login}>
            <Link href="#">ORGANIZATION LOGIN</Link>
          </div>
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
