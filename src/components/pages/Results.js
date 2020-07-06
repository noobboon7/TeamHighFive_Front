import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";

import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

import { Row, Col, Form} from "react-bootstrap";


const Results = ({ allPrograms, homeFilterArr }) => {
	const [value, setValue] = useState({});

  let homeFilterChoice = JSON.parse(sessionStorage.getItem('userSelects2'));
	const filteredResults = useFilterResults(allPrograms, value);

  console.log(('results',filteredResults||'home:',homeFilterChoice))

  return (
		<>
      {
			// 	<Row className='w-50 align-content-start flex-column mx-auto'>
      //   <Col md='5' className='p-0'>
      //     <h6 className='text-black mt-3'>Filter by</h6>
      //   </Col>
      //   <SearchLocation prgArr={allPrograms} getVal={setValue}/>
      // </Row>
		}

			<Form className="px-5">
			<h6 className='text-black mt-3'>Filter by</h6>
			  <Form.Row>
					<Form.Group as={Col} md="4">
						<Form.Label for="byCategories">Category</Form.Label>
						<Form.Control as="select" id="byCategories">
							<option>sports</option>
							<option>technologyk</option>
						</Form.Control>
					</Form.Group>
			    <Form.Group as={Col} md="4">
						<Form.Label for="byLocation">Location</Form.Label>
			      <Form.Control as="select" id="byLocation">
							<option>Brooklyn, New York</option>
							<option>New York, New York</option>
						</Form.Control>
			    </Form.Group>

			    <Form.Group as={Col} md="4">
						<Form.Label for="bySeason">Season</Form.Label>
						<Form.Control as="select" id="bySeason">
							<option>Spring</option>
							<option>Summer</option>
						</Form.Control>
			    </Form.Group>
			  </Form.Row>
			</Form>

			<ProgramsList prgArr={allPrograms} filteredPrograms={(filteredResults||homeFilterChoice)} />
		</>
	);
};

export default Results;
