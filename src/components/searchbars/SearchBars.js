import React from "react";
import {withRouter} from 'react-router-dom';
import { Button, Form, FormGroup } from "react-bootstrap";

import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//
// need to send back filter results from form groups 
const SearchBars = ({prgArr, history}) => {
	
	const handleSubmit = () => {
		history.push('/results');
		console.log('hello', history );
		// react router link to send user to results page 
	}
	
	return (
		<Form inline>
		<FormGroup>
			<SearchCategory prgArr={prgArr} />
		</FormGroup>
		<FormGroup>
			<SearchSeason prgArr={prgArr} />
		</FormGroup>
		<FormGroup>
			<SearchLocation prgArr={prgArr} />
		</FormGroup>
		<Button onClick={handleSubmit}>
			<FontAwesomeIcon icon={faSearch} />
		</Button>
	</Form>
	);
}

export default withRouter(SearchBars);