import React from 'react';

let organizations = [];
let programs = [];
let filterResults;
export const fetchContext = React.createContext({
  organizations,
  programs,
  filterResults
});
