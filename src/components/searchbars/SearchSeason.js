import React, {useState} from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const SearchSeason = ({getVal,valArr}) => {
  const seasons = ['Summer', 'Spring', 'Fall', 'Winter', 'Year-round'];
  const [season, setSeason] = useState('Season');
  return (
		<InputGroup>
			<DropdownButton
				onSelect={(e) => {
					getVal([e,...valArr])
					setSeason(e)}}
				as={InputGroup.Append}
				variant='info'
				title={season}
				id='input-group-dropdown-2'>
				{seasons.map((program, idx) => (
					<Dropdown.Item eventKey={program} key={idx}>
						{program}
					</Dropdown.Item>
				))}
			</DropdownButton>
		</InputGroup>
	);
};

export default SearchSeason;
