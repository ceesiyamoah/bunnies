import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({
	component: Component,
	restricted,
	authExists,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				true ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

export default PrivateRoute;