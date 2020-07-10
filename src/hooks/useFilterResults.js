const useFilterResults = (programs, { category, location, season }) => {
	// console.log(category, location, season, programs);
	let filteredCategories = programs.filter((program) => {
		return program.categories.some((el) => el === category) 
	});

	if(season || location){
		let type = (season || location);
		console.log('hello from if type:', type)
		console.log('filters if:', filteredCategories)

		if(filteredCategories.length){
			return filteredCategories.filter((program) => {
				return program.start_season === season ||
							 program.location === location
			});
		}else{
			return programs.filter(program => {
				return program.start_season === season || program.location === location;
			});
		}
	}else {
			// sessionStorage.setItem('userSelects', JSON.stringify(filteredCategories))
			return filteredCategories;
		}
};

export default useFilterResults;