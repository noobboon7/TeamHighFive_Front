import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Footer from "../styled-components/Footer";
import styles from "./Layout.module.css";
import Logo from "../static/youth_connection_logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ children }) => (
  <div>
    <Navbar
      collapseOnSelect
      light expand="lg"
      sticky="top"
      className="custom-navbar"
    >
      <Navbar.Brand href="#home">
        <img className="logo img-fluid" src={Logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="d-flex justify-content-around  w-100">
          <ul className="list-inline m-0 text-uppercase">
            <li class="list-inline-item"><Link to="/">Home</Link></li>
            <li class="list-inline-item"><Link to="/about">About</Link></li>
            <li class="list-inline-item"><Link to="/howItWorks">How it Works</Link></li>
            <li class="list-inline-item"><Link to="#">Add an Organization</Link></li>
            <li class="list-inline-item"><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="list-inline m-0 text-uppercase">
            <li class="list-inline-item"><Link href="#">
            <FontAwesomeIcon icon={faUser} className="mr-2 icons" /> Organization Login</Link></li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {children}
    <Footer id="footer" className="py-3 mt-3">
      <Container className="container-fluid">
        <Row>
          <Col md="4">
            <p>&copy; Youth Connnection</p>
          </Col>
          <Col md="4">
            <p>Logos</p>
          </Col>
          <Col md="4">
            <ul class="list-unstyled">
            <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Footer>
  </div>
);

export default Layout;
