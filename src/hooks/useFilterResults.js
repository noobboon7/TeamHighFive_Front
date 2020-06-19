import React from 'react';

const useFilterResults = (programs, { category, location, season }) => {
	console.log(category, location, season);
	return programs.filter((program) => {
		return (
			program.start_season === season ||
			program.categories.some((el) => el === category) ||
			program.location === location
		);
	});
};

export default useFilterResults;