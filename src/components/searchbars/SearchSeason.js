import React, {useState} from "react";
import {
	Col,
  Dropdown,
  DropdownButton,
	ButtonGroup
} from "react-bootstrap";

const SearchSeason = ({getVal,prgArr, disable}) => {
	const [season, setSeason] = useState('Season');
	const avalibleSeasons = () => {
    let seasons = prgArr.map(program => program.start_season ==='N/A' ? 'Year-Round' : program.start_season);
    seasons = new Set(seasons);
    return [...seasons];
	};
	
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
				{avalibleSeasons().map((program, idx) => (
					<Dropdown.Item eventKey={program} key={idx}>
						{program}
					</Dropdown.Item>
				))}
			</DropdownButton>
		</Col>
	);
};

export default SearchSeason;
