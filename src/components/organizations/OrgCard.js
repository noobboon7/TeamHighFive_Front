import React from "react";
import {
  Col,
  Card
} from "react-bootstrap";
import styles from "./OrgCard.module.css";
import {
  Link
} from 'react-router-dom'

const OrgCard = ({
  organization
}) => {
  function formatDescription() {
    const newString = organization.description.split(" ").slice(0, 10);
    return newString.join(" ");
  }

  return ( <
    Col lg = {
      4
    }
    sm = {
      6
    } >
    <
    Card style = {
      {
        width: "18rem",
        height: "16rem",
        justifyContent: "space-around",
        alignContent: "center",
        margin: "5vh",
        fontSize: "12px",
      }
    } >
    <
    Card.Img className = {
      styles.img
    }
    variant = "top"
    src = {
      organization.logo
    }
    /> <
    Card.Body >
    <
    Card.Title > {
      organization.name
    } < /Card.Title> <
    Card.Text > {
      formatDescription()
    } < /Card.Text> < /
    Card.Body > <
    Card.Body >
    <
    Card.Link href = {
      organization.url
    } > {
      organization.url
    } < /Card.Link> < /
    Card.Body > <
    /Card> < /
    Col >
  );
};

export default OrgCard;
