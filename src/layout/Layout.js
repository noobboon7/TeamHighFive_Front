import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

import Footer from "../styled-components/Footer";
import LoginModal from "../components/loginModal/LoginModal";
// import styles from "./Layout.module.css";

import Logo from "../static/youth_connection_logo.png";
import NYCCodersLogo from "../static/nyc_coder.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children }) => {
  //const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email & Password: ", email, password);
    const response = await axios.get(
      "https://connection-youth.herokuapp.com/login"
    );
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Welcome to Youth Connection!</title>
        <meta
          name="description"
          content="Welcome to Youth Connection! The mission is to make extracurricular (specifically non-profit) organizations and programs more accessible and reachable to the youth."
        />
        <body class="homepage" />
      </Helmet>
      <Navbar
        collapseOnSelect
        color="light"
        expand="lg"
        sticky="top"
        className="custom-navbar"
      >
        <Navbar.Brand>
          <Link to="/">
            <img
              className="logo img-fluid"
              src={Logo}
              alt="Youth Connnection"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="d-flex justify-content-around w-100">
            <ul className="list-inline m-0 text-uppercase">
              <li className="list-inline-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/about">About</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/programs">Programs</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Organization</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <ul className="list-inline m-0 text-uppercase social-media">
              <li className="list-inline-item">
                <a href="/" className="m-0">
                  <FontAwesomeIcon icon={faFacebook} className="m-0" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="m-0">
                  <FontAwesomeIcon icon={faTwitter} className="m-0" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/" className="m-0">
                  <FontAwesomeIcon icon={faInstagram} className="m-0" />
                </a>
              </li>
              <li className="list-inline-item">
                <span
                  className="m-0 text-dark login-modal"
                  onClick={handleShow}
                >
                  <FontAwesomeIcon icon={faUser} className="ml-5" />
                  &nbsp;Login
                </span>
                <LoginModal
                  handleSubmit={handleSubmit}
                  handleEmail={handleEmail}
                  handlePassword={handlePassword}
                  email={email}
                  password={password}
                  show={show}
                  onHide={handleClose}
                />
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <Footer id="footer" className="py-3 mt-3">
        <Container className="container-fluid text-center">
          <Row className="text-center justify-content-center align-items-center">
            <Col md="3">
              <p className="text-center">&copy; 2020 Youth Connnection</p>
            </Col>
            <Col md="1">
              <img
                className="img-fluid mx-auto mb-2"
                src={Logo}
                alt="Youth Connection"
              ></img>
            </Col>
            <Col md="1">
              <img
                className="img-fluid mx-auto mb-2"
                src={NYCCodersLogo}
                alt="NYC Coders"
              ></img>
            </Col>
          </Row>
        </Container>
      </Footer>
    </div>
  );
};

export default Layout;
