import React from 'react';
import { Col, Form} from "react-bootstrap";

const ResultsPageSearchBar = () => (

  <Form>
			<h6 className='text-black'>Filter by</h6>
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
)

export default ResultsPageSearchBar;
