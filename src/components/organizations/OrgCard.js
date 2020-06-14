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
    Col className="mb-5" lg = {
      4
    }
    sm = {
      6
    } >
    <
    Card className="border-0">
    <
    Card.Img className = "d-none"
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
    } < /Card.Text>
    <
    Card.Link className="mx-0" href = {
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
