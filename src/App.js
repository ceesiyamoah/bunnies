import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/Login';
import history from './history';
import PrivateRoute from './components/PrivateRoute';
import VerifyAccount from './components/VerifyAccount';
import Sell from './components/Sell';
import Navbar from './components/Navbar';
import ResetPassword from './components/ResetPassword';
import AddProduct from './components/AddProduct';
import Pay from './components/Pay';
const App = () => {
	return (
		<div style={{ margin: '5px' }}>
			<Router history={history}>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/resetpassword' component={ResetPassword} />
					<PrivateRoute exact path='/verify' component={VerifyAccount} />
					<PrivateRoute exact path='/sell' component={Sell} />
					<PrivateRoute exact path='/addproduct' component={AddProduct} />
					<PrivateRoute exact path='/pay' component={Pay} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
