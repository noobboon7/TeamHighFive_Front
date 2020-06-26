import React, {useContext, useState} from "react";
import {withRouter} from 'react-router-dom';
import { fetchContext } from "../../fetchContext";
import useFilterResults from "../../hooks/useFilterResults";


import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";

import { Row, Button, Form } from "react-bootstrap";


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
		<Form onSubmit={handleSubmit} inline className="container-fluid justify-content-center">
		<Row className="w-100 justify-content-center align-content-end flex-column mr-md-5	">
				<h2 className="text-white">I am seeking...</h2>
				<SearchCategory prgArr={programs} getVal={setValue} />

				<h6 className="text-white mt-3">Filter by</h6>
				<SearchLocation prgArr={programs} getVal={setValue} />

				<SearchSeason valArr={value} getVal={setValue} />

			<Button type='submit' variant="dark">
			{
				// <FontAwesomeIcon icon={faSearch} />
			}
				<span class="text-uppercase">Search</span>
			</Button>
		</Row>
		</Form>
	);
}

export default withRouter(SearchBars);
