import React, { useState } from "react";
import useFilterResults from "../../hooks/useFilterResults";
import ResultsPageSearch from '../searchbars/ResultsPageSearch'

import SearchLocation from "../searchbars/SearchLocation";
import ProgramsList from "../programsList";

import { Container, Row, Col, Badge, Button, ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

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
				  <SearchLocation prgArr={allPrograms} getVal={setValue}/>
			}
<<<<<<< HEAD
			<Container fluid className="p-5 bg-info text-light mb-4">
				<Container>
					<ResultsPageSearch />
				</Container>

				<Container>
					<ListGroup horizontal>
						<ListGroup.Item className="border-0 p-0 mr-1"><Button variant="outline-dark">
						Sports <Badge variant="light">x</Badge>
						</Button></ListGroup.Item>
						<ListGroup.Item className="border-0 p-0 mr-1"><Button variant="outline-dark">
						Education <Badge variant="light">x</Badge>
						</Button></ListGroup.Item>
					</ListGroup>
				</Container>
			</Container>

			<Container className="text-right">
					<Button variant="outline-info">
						  <FontAwesomeIcon icon={faList} className="m-0" />
=======

			<ResultsPageSearch />
      {/* //////////////////////////////////////////////////////// */}
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
{/* ////////////////////////////////////////////////// */}
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
>>>>>>> acaabd7f340fc0454ec83bde02c4e4eb42b0b32e
					</Button>
					&nbsp;
					<Button variant="outline-info">
						<FontAwesomeIcon icon={faTh} className="m-0" />
					</Button>
			</Container>

      {/* /////////////////////////////////////// */}
			<ProgramsList
				prgArr={allPrograms}
				filteredPrograms={filteredResults || homeFilterChoice}
			/>
		</>
	);
};

export default Results;
