const useFilterResults = (programs, { category, location, season }) => {
	// console.log(category, location, season);
	let filteredCategories = programs.filter((program) => {
		return program.categories.some((el) => el === category);
	});

	if(filteredCategories.length){
		season = season === 'Year-Round' ? 'N/A': season;
		return filteredCategories.filter((program) => {
			return program.start_season === season ||
						 program.location === location;
		});
	}else{
		return programs.filter(program => {
						 return program.start_season === season || program.location === location;
					 });
	}
	// sessionStorage.setItem('userSelects', JSON.stringify(filteredCategories))
	return filteredCategories;
};

export default useFilterResults;