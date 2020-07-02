import React, {useState} from "react";
import {
	Col,
  Dropdown,
  DropdownButton,
	ButtonGroup
} from "react-bootstrap";

const SearchSeason = ({getVal,valObj, disable}) => {
  const seasons = ['Summer', 'Spring', 'Fall', 'Winter', 'Year-round'];
  const [season, setSeason] = useState('Season');
	return (
		<Col md='5' className='p-0 searchbar-wrapper'>
			<DropdownButton
				disabled={disable}
				value='season'
				onSelect={(e) => {
					getVal((valObj) => ({ ...valObj, season: e }));
					setSeason(e);
				}}
				as={ButtonGroup}
				variant='light'
				title={season}
				id='input-group-dropdown-2'
				className='w-100'>
				{seasons.map((program, idx) => (
					<Dropdown.Item eventKey={program} key={idx}>
						{program}
					</Dropdown.Item>
				))}
			</DropdownButton>
		</Col>
	);
};

export default SearchSeason;
