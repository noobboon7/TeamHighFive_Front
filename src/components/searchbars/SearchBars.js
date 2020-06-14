import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//
const handleClick = () => {
  alert('rendering new results page'); 
  // react router link to send user to results page 
}
// need to send back filter results from form groups 
const SearchBars = ({prgArr}) => (
  <Form inline>
    <FormGroup>
      <SearchCategory prgArr={prgArr}/>
    </FormGroup>
    <FormGroup>
      <SearchSeason />
    </FormGroup>
    <FormGroup>
      <SearchLocation />
    </FormGroup>
    <Button onClick={handleClick}><FontAwesomeIcon icon={faSearch} /></Button>
  </Form>
);

export default SearchBars;
