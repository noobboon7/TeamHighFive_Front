import React from "react";
import {withRouter} from 'react-router-dom';
import { Button, Form, FormGroup } from "react-bootstrap";

import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
  // react router link to send user to results page 
}
// need to send back filter results from form groups 
const SearchBars = ({ prgArr }) => (
	<Form inline onSubmit={handleSubmit}>
		<FormGroup>
			<SearchCategory prgArr={prgArr} />
		</FormGroup>
		<FormGroup>
			<SearchSeason prgArr={prgArr} />
		</FormGroup>
		<FormGroup>
			<SearchLocation prgArr={prgArr} />
		</FormGroup>
		<Button>
			<FontAwesomeIcon icon={faSearch} />
		</Button>
	</Form>
);

export default withRouter(SearchBars);