import React from 'react';

function Error(props) {
	if(props.errMsg){
		return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{props.errMsg}</div>
	}
	return null
}

export default Error;
