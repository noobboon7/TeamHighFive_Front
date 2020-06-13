import React from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const SearchSeason = () => (
  <InputGroup>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="info"
      title="Dropdown"
      id="input-group-dropdown-2"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
);

export default SearchSeason;
