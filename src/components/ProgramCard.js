import React from "react";

import { Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

//add color "info" to button and height
const ProgramCard = ({ program }) => {
	// console.log('program',program);
	function formatDescription() {
		let newString = program.description.split(" ").slice(0, 10);
		newString = newString.join(" ");
		return newString + "...";
	}
	const catBadges = () => {
		return program.categories.map(cat => <Badge variant='info' className="mr-2">{cat}</Badge>);
	}

	return (
		<Col
			className='mb-5 col-lg-4 d-flex align-items-stretch organizationList-col'
			lg={4}
			sm={6}>
			<Card className='border-0'>
				<Card.Img className='d-none' src={program.logo} />
				<Card.Body>
					<Card.Text className='intro-lead m-0'>
						{program.start_season === "N/A" ?
							"Year-Round"
							:
							program.start_season}
					</Card.Text>
					<Card.Title>{program.name}</Card.Title>
					<Card.Text>{formatDescription()}</Card.Text>
					<Card.Text><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> {program.location}</Card.Text>
					<Card.Text>{catBadges()}</Card.Text>
					<Card.Link className='mx-0' href={program.url}>
						{program.url}
					</Card.Link>
				</Card.Body>
				<Card.Footer className='text-center'>
					<Link to={`/organization/${program.organization_id}`}>
						<Button variant='info' renders='button'>
							<span>Learn More</span>
						</Button>
					</Link>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default ProgramCard;
