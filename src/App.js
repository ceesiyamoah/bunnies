import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import history from './history';
import PrivateRoute from './components/PrivateRoute';
import VerifyAccount from './components/VerifyAccount';
import Sell from './components/Sell';
import Navbar from './components/Navbar';
const App = () => {
	return (
		<Router history={history}>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Login} />
				<PrivateRoute exact path='/verify' component={VerifyAccount} />
				<PrivateRoute exact path='/sell' component={Sell} />
			</Switch>
		</Router>
	);
};

export default App;
