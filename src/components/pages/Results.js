import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";
import ResultsPageSearch from '../searchbars/ResultsPageSearch';

// import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

// import { Container, Badge, Button, ListGroup} from "react-bootstrap";


const Results = ({ allPrograms, homeFilterArr }) => {
	const [value, setValue] = useState({});

  let homeFilterChoice = JSON.parse(sessionStorage.getItem('userSelects2'));
	const filteredResults = useFilterResults(allPrograms, value);

  // console.log(allPrograms)

  return (
		<>
			{
				// <SearchLocation prgArr={allPrograms} getVal={setValue}/>
			}

			<ResultsPageSearch prgArr={allPrograms} getVal={setValue} />

			<ProgramsList
				prgArr={allPrograms}
				filteredPrograms={filteredResults || homeFilterChoice}
			/>
		</>
	);
};

export default Results;
