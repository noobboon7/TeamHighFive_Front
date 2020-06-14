import React from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import styles from "./SearchBars.module.css";

const SearchLocation = () => (
  <InputGroup>
    
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

export default SearchLocation;
