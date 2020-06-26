import React, { useState } from "react";
import {
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";

const SearchCategory = ({ prgArr, getVal }) => {
  const [categoryChoice, setCategoryChoice] = useState("Categories");
  const parseCurrentAvaliableCategories = () => {
    let categoriesArr = prgArr.map((program) => program.categories);
    categoriesArr = categoriesArr.flat();
    categoriesArr = new Set(categoriesArr);
    return Array.from(categoriesArr);
  };
  return (
    <Col md="5" className="p-0 searchbar-wrapper">
      <DropdownButton
        as={ButtonGroup}
        id="input-group-dropdown-2"
        className="w-100"
        variant="light"
        title={categoryChoice}
        onSelect={(e) => {
          getVal((valObj) => ({ ...valObj, category: e }));
          setCategoryChoice(e);
        }}
      >
        {parseCurrentAvaliableCategories().map((program, idx) => (
          <Dropdown.Item eventKey={program} key={idx}>
            {program}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Col>
  );
};

export default SearchCategory;
