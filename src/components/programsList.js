import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramsList = ({prgArr, filteredPrograms}) => {
	// console.log('this is Filtered from Plistcomp:',filteredPrograms)
	const viewPrograms = () => {
		if(filteredPrograms){
			// console.log('working:',filteredPrograms)
			return filteredPrograms.map((program, idx) => (
				<ProgramCard key={idx} program={program} />
			));
		} else{
			return prgArr.map((program, idx) => <ProgramCard key={idx} program={program} />);
		}
	}
	// console.log(viewPrograms())
	
	return (
		<div className='container mt-5 organizationList'>
			<div className='row'>
				{
					viewPrograms()
				}
			</div>
		</div>
	);
};

export default ProgramsList;
