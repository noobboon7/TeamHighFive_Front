import React, {useContext, useState} from "react";
import {withRouter} from 'react-router-dom';
import { fetchContext } from "../../fetchContext";
import useFilterResults from "../../hooks/useFilterResults";


import SearchCategory from "./SearchCategory";
import SearchSeason from "./SearchSeason";
import SearchLocation from "./SearchLocation";

import { Row, Col, Button, Form } from "react-bootstrap";


const SearchBars = ({history}) => {
	const [value, setValue] = useState({});
	const contextArrays = useContext(fetchContext);

	let programs = contextArrays.programs;
	let filter = contextArrays.setFilteredProgramsArr;

	const filteredResults = useFilterResults(programs, value);
	/*
	 user should be able to switch back to category and have no filtered 
	 results, there is a bug when you choose a location or season you cannot
	 see previous choices. thats whats need to get fixed next
	 then session storage all data to enhance user experience 
	 */ 

	const handleSubmit = (e) => {
		e.preventDefault();
		filter(filteredResults)
		sessionStorage.setItem('userSelects2', JSON.stringify(filteredResults))
		history.push('/results');
	};

	return (
		<Form onSubmit={handleSubmit} inline className='container-fluid'>
			<Row className='w-100 align-content-end flex-column mx-auto'>
				<Col md='5' className='p-0'>
					<h2 className='text-white'>I am seeking...</h2>
				</Col>
				<SearchCategory prgArr={programs} getVal={setValue} />
				<Col md='5' className='p-0'>
					<h6 className='text-white mt-3'>Filter by</h6>
				</Col>
				<SearchLocation
					prgArr={filteredResults}
					getVal={setValue}
					disable={!filteredResults.length}
				/>
				<SearchSeason
					prgArr={filteredResults}
					getVal={setValue}
					disable={!filteredResults.length}
				/>
				<Col md='5' className='p-0 searchbar-wrapper'>
					<Button
						disabled={!filteredResults.length}
						type='submit'
						variant='dark'
						className='w-100'>
						<span className='text-uppercase m-auto'>Search</span>
					</Button>
				</Col>
			</Row>
		</Form>
	);
}

export default withRouter(SearchBars);
