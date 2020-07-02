const useFilterResults = (programs, { category, location, season }) => {
	// console.log(category, location, season);
	let filteredCategories = programs.filter((program) => {
		return program.categories.some((el) => el === category) 
	});
	if(season || location){
		// console.table(filteredCategories)
		season = season === 'Year-Round' ? 'N/A': season 
		return filteredCategories.filter((program) => {
			return (
				program.start_season === season ||
				program.location === location
				);
			});
		}else {
			// sessionStorage.setItem('userSelects', JSON.stringify(filteredCategories))
			return filteredCategories
		}
};

export default useFilterResults;