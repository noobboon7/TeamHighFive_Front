import React from "react";
import categories from '../../data/categories'
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const SearchCategory = () => (
	<InputGroup>
  <DropdownButton
		as={InputGroup.Append}
		variant='info'
		title='Categories'
		id='input-group-dropdown-2'>
		{categories.map(category => <Dropdown.Item href='#'>{category}</Dropdown.Item>)}
    </DropdownButton>
  </InputGroup>
);

export default SearchCategory;
