import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";
import ResultsPageSearch from '../searchbars/ResultsPageSearch'

// import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

// import { Badge, Button} from "react-bootstrap";


const Results = ({ allPrograms, homeFilterArr }) => {
	const [value, setValue] = useState({});

  let homeFilterChoice = JSON.parse(sessionStorage.getItem('userSelects2'));
	const filteredResults = useFilterResults(allPrograms, value);

  // console.log(('results',filteredResults||'home:',homeFilterChoice))

  return (
		<>
			{/* <Button variant='primary'>
				Profile <Badge variant='light'>9</Badge>
				<span className='sr-only'>unread messages</span>
			</Button> */}
			{
				//   <SearchLocation prgArr={allPrograms} getVal={setValue}/>
			}

			<ResultsPageSearch />
			<ProgramsList
				prgArr={allPrograms}
				filteredPrograms={filteredResults || homeFilterChoice}
			/>
		</>
	);
};

export default Results;
