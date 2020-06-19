import React from 'react';

let organizations = [];
let programs = [];
let setFilteredResultsArr;
export const fetchContext = React.createContext({
  organizations,
  programs,
  setFilteredResultsArr
});
