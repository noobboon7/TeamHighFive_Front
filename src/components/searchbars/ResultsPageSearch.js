import React from 'react';
import { Col, Form, Container, ListGroup, Button, Badge} from "react-bootstrap";

const ResultsPageSearchBar = ({prgArr, getVal}) => {
  const parseLocation = () => {
    let locations = prgArr.map(program => program.location);
    locations = new Set(locations);
		return [...locations];
  };
  const parseCat = () => {
    let category = prgArr.map(program => program.categories).flat();
    category = new Set(category);
		return [...category];
  };

  console.log(parseLocation());
  return (
		<>
			<Form>
				<h6 className='text-black '>Filter by</h6>
				<Form.Row className="align-items-end">
					<Form.Group as={Col} md='4'>
						<Form.Label for='byCategories'>Category</Form.Label>
						<Form.Control as='select' id='byCategories'>
							{parseCat().map(cat => (
								<option>{cat}</option>
							))}
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} md='3'>
						<Form.Label for='byLocation'>Location</Form.Label>
						<Form.Control as='select' id='byLocation'>
							{parseLocation().map(location => (
								<option>{location}</option>
							))}
						</Form.Control>
					</Form.Group>

          <Form.Group as={Col} md='3'>
						<Form.Label for='bySeason'>Season</Form.Label>
						<Form.Control as='select' id='bySeason'>
							<option>Spring</option>
							<option>Summer</option>
						</Form.Control>
					</Form.Group>

          <Form.Group as={Col} md='2'>
          <Button variant="dark" type="submit"> Update </Button>
					</Form.Group>
				</Form.Row>
			</Form>
		</>
	);
}

export default ResultsPageSearchBar;
