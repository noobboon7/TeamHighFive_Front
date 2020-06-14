import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "react-bootstrap";
import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";
import styles from "./SearchBars.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBars = () => (
  <Form inline>
    <FormGroup>
      <SearchCategory />
    </FormGroup>
    {' '}
    <FormGroup>
      <SearchSeason />
    </FormGroup>
    {' '}
    <FormGroup>
      <SearchLocation />
    </FormGroup>
    {' '}
    <Button color="warning"><FontAwesomeIcon icon={faSearch} /></Button>
  </Form>
);

export default SearchBars;
