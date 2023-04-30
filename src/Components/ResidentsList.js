import React from 'react';

function ResidentsList(props) {
	let validResident = props.validResident;
	const renderResidentList = (validResident) => {
		if(validResident.length > 0){
			validResident = JSON.parse(validResident)
			return(
				validResident.map(resident=>{
					return(
						<li key={resident} className="slide-up-fade-in">
						{resident}
					</li>
					)
				})
			)
		}
		return null;
	}

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{renderResidentList(validResident)}
			</ul>
		</div>
	);
}

export default ResidentsList;
