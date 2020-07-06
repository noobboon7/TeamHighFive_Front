import React from 'react';

// works but will get undefined when trying to use a filter on array 
// const fetchProgramsFromApi = () => {
//   fetch("https://connection-youth.herokuapp.com/programs")
//   .then((res) => res.json())
//   .then((apiPrograms) => allData.allPrograms = apiPrograms)
// }
// const fetchOrganizationsFromApi = () => {
//   fetch("https://connection-youth.herokuapp.com/organizations")
//   .then((res) => res.json())
//   .then((apiOrganizations) => allData.allOrganizations = apiOrganizations)
// }

// const allData = {
//   allPrograms: fetchProgramsFromApi(),
//   allOrganizations: fetchOrganizationsFromApi()
// }

export const fetchContext = React.createContext({});
// export const appData = React.createContext(allData);