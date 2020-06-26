import React from "react";
import OrgCard from "./organizations/OrgCard";

const ProgramsList = ({prgArr}) => {
	// console.log('this is  prgArr:',prgArr)
	return (
		<div className='container mt-5 organizationList'>
			<div className='row'>
				{prgArr.map((program, idx) => (
					<OrgCard key={idx} program={program} />
				))}
			</div>
		</div>
	);
};

export default ProgramsList;
