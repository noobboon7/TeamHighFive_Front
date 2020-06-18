import React, {useContext, useState} from "react";
import {withRouter} from 'react-router-dom';
import { fetchContext } from "../../fetchContext";

import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";

import { Button, Form, FormGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBars = ({history}) => {
	const [value, setValue] = useState([]);
	const contextArrays = useContext(fetchContext);
	let programs = contextArrays.programs;
	let filterThing = contextArrays.filterResults;

	const handleSubmit = (e) => {
		e.preventDefault();
		filterThing(value);
		history.push('/results');
		// console.log(history);
		// pass up values to context to display on results 
	};
	 
	return (
		<Form onSubmit={handleSubmit} inline>
			<FormGroup>
				<SearchCategory prgArr={programs} getVal={setValue} valArr={value} />

				<SearchLocation prgArr={programs} getVal={setValue} valArr={value} />

				<SearchSeason valArr={value} getVal={setValue} />
			</FormGroup>
			<Button type='submit'>
				<FontAwesomeIcon icon={faSearch} />
			</Button>
		</Form>
	);
}

export default withRouter(SearchBars);