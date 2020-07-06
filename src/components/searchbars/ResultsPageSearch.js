import React from 'react';
import { Col, Form, Container, ListGroup, Button, Badge} from "react-bootstrap";

const ResultsPageSearchBar = ({prgArr, getVal}) => {
  const parseLocation = () => {
    let locations = prgArr.map(program => program.location);
    locations = new Set(locations);
		return [...locations];
  };
  
  console.log(parseLocation());
  return (
		<>
			<Form>
				<h6 className='text-black '>Filter by</h6>
				<Form.Row>
					<Form.Group as={Col} md='4'>
						<Form.Label for='byCategories'>Category</Form.Label>
						<Form.Control as='select' id='byCategories'>
							<option>sports</option>
							<option>technologyk</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} md='4'>
						<Form.Label for='byLocation'>Location</Form.Label>
						<Form.Control as='select' id='byLocation'>
              {
                parseLocation().map(location => <option>{location}</option>)
              }

						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} md='4'>
						<Form.Label for='bySeason'>Season</Form.Label>
						<Form.Control as='select' id='bySeason'>
							<option>Spring</option>
							<option>Summer</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
			</Form>
		</>
	);
}

export default ResultsPageSearchBar;
