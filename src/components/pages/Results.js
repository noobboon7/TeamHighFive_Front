import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";
import ResultsPageSearch from '../searchbars/ResultsPageSearch'

// import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

import { Container, Row, Col, Badge, Button, ListGroup} from "react-bootstrap";


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
			<Container className="mb-5">
				<ListGroup horizontal>
					<ListGroup.Item className="border-0"><Button variant="">
					Sports <Badge variant="light">x</Badge>
					</Button></ListGroup.Item>
					<ListGroup.Item className="border-0"><Button variant="outline-dark">
					Education <Badge variant="light">x</Badge>
					</Button></ListGroup.Item>
				</ListGroup>
			</Container>

			<Container>
			<Row xs={2} md={4} lg={6}>
				<Col>
					<Button variant="outline-dark">
					Sports <Badge variant="light">x</Badge>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-dark">
					Education <Badge variant="light">x</Badge>
					</Button>
				</Col>
				<Col>
					<Button variant="outline-dark">
					Brooklyn <Badge variant="light">x</Badge>
					</Button>
				</Col>
			</Row>
			</Container>
			<ProgramsList
				prgArr={allPrograms}
				filteredPrograms={filteredResults || homeFilterChoice}
			/>
		</>
	);
};

export default Results;
