import React, {useState} from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  ButtonGroup
} from "react-bootstrap";

const SearchLocation = ({prgArr, getVal, disable}) => {
  const [location, setLocation] = useState('Location');
  
  //make an array of available categories 
  const parseLocation = () => {
    let locations = prgArr.map(program => program.location);
    locations = new Set(locations);
    return [...locations];
  };
  
  return (
		<Col md='5' className='p-0 searchbar-wrapper'>
			<DropdownButton
				disabled={disable}
				onSelect={(e) => {
					getVal((valObj) => ({ ...valObj, location: e }));
					setLocation(e);
				}}
				as={ButtonGroup}
				variant='light'
				title={location}
				id='input-group-dropdown-2'
				className='w-100'>
				<Dropdown.Item eventKey='Location' key='default'>
					Location
				</Dropdown.Item>

				{parseLocation().map((local, idx) => (
					<Dropdown.Item eventKey={local} key={idx}>
						{local}
					</Dropdown.Item>
				))}
			</DropdownButton>
		</Col>
	);
};

export default SearchLocation;
