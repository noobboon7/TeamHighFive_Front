import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";

import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

import { Row, Col} from "react-bootstrap";


const Results = ({ allPrograms, homeFilterArr }) => {
	const [value, setValue] = useState({});

  let homeFilterChoice = JSON.parse(sessionStorage.getItem('userSelects2'));
	const filteredResults = useFilterResults(allPrograms, value);

  console.log(('results',filteredResults||'home:',homeFilterChoice))

  return (
		<>
      <Row className='w-50 align-content-start flex-column mx-auto'>
        <Col md='5' className='p-0'>
          <h6 className='text-black mt-3'>Filter by</h6>
        </Col>
        <SearchLocation prgArr={allPrograms} getVal={setValue}/>
      </Row>

			<ProgramsList prgArr={allPrograms} filteredPrograms={(filteredResults||homeFilterChoice)} />
		</>
	);
};

export default Results;
