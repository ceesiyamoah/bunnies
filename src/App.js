import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import history from './history';
import PrivateRoute from './components/PrivateRoute';
import VerifyAccount from './components/VerifyAccount';
const App = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={Login} />
				<PrivateRoute exact path='/verify' component={VerifyAccount} />
			</Switch>
		</Router>
	);
};

export default App;
