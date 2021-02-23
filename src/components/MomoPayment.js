import React, { useEffect } from 'react';
import history from './../history';

const MomoPayment = ({ cart }) => {
	useEffect(() => {
		history.push('/sell');
	}, [cart]);

	return <div>momod</div>;
};

export default MomoPayment;
