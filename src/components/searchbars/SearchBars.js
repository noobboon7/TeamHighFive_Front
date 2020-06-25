import React, {useContext, useState} from "react";
import {withRouter} from 'react-router-dom';
import { fetchContext } from "../../fetchContext";
import useFilterResults from "../../hooks/useFilterResults";


import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";

import { Row, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBars = ({history}) => {
	const [value, setValue] = useState({});
	const contextArrays = useContext(fetchContext);


	let programs = contextArrays.programs;
	let filter = contextArrays.setFilteredProgramsArr;

	const filteredResults = useFilterResults(programs, value);

	const handleSubmit = (e) => {
		e.preventDefault();
		filter(filteredResults)
		history.push('/results');
	};
	// console.log(value)	 fix multiple renders Please
	return (
		<Form onSubmit={handleSubmit} inline className="w-100 justify-content-center">
		<Row className="w-100 justify-content-center">
				<SearchCategory prgArr={programs} getVal={setValue} />

				<SearchLocation prgArr={programs} getVal={setValue} />

				<SearchSeason valArr={value} getVal={setValue} />

			<Button type='submit'>
				<FontAwesomeIcon icon={faSearch} />
			</Button>
		</Row>
		</Form>
	);
}

export default withRouter(SearchBars);
