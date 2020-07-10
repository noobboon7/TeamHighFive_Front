import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";
import ResultsPageSearch from '../searchbars/ResultsPageSearch';

// import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

const Results = ({ allPrograms, homeFilterArr }) => {
	const [value, setValue] = useState({});

  let homeFilterChoice = JSON.parse(sessionStorage.getItem('userSelects2'));
	const filteredResults = useFilterResults(allPrograms, value);

	let displayResultsFromFilter = filteredResults.length ? filteredResults : homeFilterChoice;
  console.log(allPrograms);

  return (
		<>
			<Container fluid className='p-5 bg-info text-light mb-4'>
				<ResultsPageSearch prgArr={allPrograms} getVal={setValue} />
			</Container>

			{/* number of programs on page and list+grid view buttons */}
			<Container>
				<Row className='justify-content-between align-items-center'>
					<Col>{allPrograms.length} matching results</Col>
					<Col className='text-right'>
						<Button variant='outline-info'>
							<FontAwesomeIcon icon={faList} className='m-0' />
						</Button>
						&nbsp;
						<Button variant='outline-info'>
							<FontAwesomeIcon icon={faTh} className='m-0' />
						</Button>
					</Col>
				</Row>
			</Container>

			<ProgramsList
				prgArr={allPrograms}
				filteredPrograms={displayResultsFromFilter}
			/>
		</>
	);
};

export default Results;
