import React from "react";
import categories from '../../data/categories'
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const sortByLetter = (typeCategory) => {
  
}

const SearchCategory = () => (
	<InputGroup>
		<DropdownButton
			as={InputGroup.Append}
			variant='info'
			title='Categories'
			id='input-group-dropdown-2'>
			{/* //had an href attribute for each dropDown Item */}
			{categories.map((category, idx) => (
				<Dropdown.Item key={idx}>{category}</Dropdown.Item>
			))}
		</DropdownButton>
	</InputGroup>
);

export default SearchCategory;
