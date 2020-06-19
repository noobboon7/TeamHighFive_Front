import React, {useState} from "react";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const SearchLocation = ({prgArr, getVal }) => {
  const [location, setLocation] = useState('Location');
  const parseLocation = () => {
    let locations = prgArr.map(program => program.location);
    locations = new Set(locations);
    locations = Array.from(locations);
    return locations;
  };
  return(
      <InputGroup>
      <DropdownButton
        onSelect={(e) => {
          getVal(valObj => ({...valObj, location: e }));
          setLocation(e)}}
        as={InputGroup.Append}
        variant="info"
        title={location}
        id="input-group-dropdown-2"
      >
        {parseLocation().map((local, idx) => (
          <Dropdown.Item eventKey={local} key={idx}>
            {local}
          </Dropdown.Item>
        ))}
      </DropdownButton>
        
    </InputGroup>
  )
};

export default SearchLocation;
