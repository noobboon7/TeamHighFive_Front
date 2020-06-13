import React from "react";
import { Row, Col } from "react-bootstrap";
import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";
import styles from "./SearchBars.module.css";

const SearchBars = () => (
  <div className={styles.searchbars}>
    <Row>
      <Col>
        <SearchCategory />
      </Col>
      <Col>
        <SearchSeason />
      </Col>
      <Col>
        <SearchLocation />
      </Col>
    </Row>
  </div>
);

export default SearchBars;
