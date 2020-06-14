import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Footer from "../styled-components/Footer";
import styles from "./Layout.module.css";
import Logo from "../static/youth_connection_logo.png";
import NYCCodersLogo from "../static/nyc_coder.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children }) => (
  <div>
    <Navbar
      collapseOnSelect
      light expand="lg"
      sticky="top"
      className="custom-navbar"
    >
      <Navbar.Brand a href="/">
        <img className="logo img-fluid" src={Logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="d-flex justify-content-around  w-100">
          <ul className="list-inline m-0 text-uppercase">

            <li class="list-inline-item"><Link to="/">Home</Link></li>
            <li class="list-inline-item"><Link to="/about">About</Link></li>
            <li class="list-inline-item"><Link to="/howItWorks">How it Works</Link></li>
            <li class="list-inline-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeMyLoUKIEGO9U94nz1zI8qX-G46YYd8jfr60AarUC4_V4FbA/viewform">Add an Organization</a></li>
            <li class="list-inline-item"><Link to="/contact">Contact</Link></li>

          </ul>
          <ul className="list-inline m-0 text-uppercase social-media">
            <li className="list-inline-item"><Link href="#" className="m-0">
            <FontAwesomeIcon icon={faFacebook} className="m-0" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="m-0">
            <FontAwesomeIcon icon={faTwitter} className="m-0" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="m-0">
            <FontAwesomeIcon icon={faInstagram} className="m-0" /></Link></li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {children}
    <Footer id="footer" className="py-3 mt-3">
      <Container className="container-fluid text-center">
        <Row className="align-items-center">
          <Col md="4">
            <p>&copy; Youth Connnection</p>
          </Col>
          <Col md="4">
            <Row className="text-center">
              <Col md="4">
              <img className="img-fluid mx-auto mb-2" src={Logo}></img>
              <h6>Youth Connnection</h6>
              </Col>
              <Col md="4">
              <img className="img-fluid mx-auto mb-2" src={NYCCodersLogo}></img>
              <h6>NYC Coders</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <ul className="list-unstyled">
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
