import React, {useState} from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const SearchCategory = ({prgArr}) => {
	const [categoryChoice, setCategoryChoice] = useState('Categories');
	const parseCurrentAvaliableCategories = () => {
		let categoriesArr = prgArr.map(program => program.categories);
		categoriesArr = categoriesArr.flat();
		categoriesArr = new Set(categoriesArr);
		return Array.from(categoriesArr);
	};
	

	return(
		<InputGroup>
			<DropdownButton
				onSelect={(e) => setCategoryChoice(e)}
				as={InputGroup.Append}
				variant='info'
				title={categoryChoice}
				id='input-group-dropdown-2'>
				{parseCurrentAvaliableCategories().map((program, idx) => (
					<Dropdown.Item eventKey={program} key={idx}>{program}</Dropdown.Item>
					))}
			</DropdownButton>
		</InputGroup>
	)
};

export default SearchCategory;
