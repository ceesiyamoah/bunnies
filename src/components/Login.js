import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from './../actions/authActions';
//TODO beautify component
const Login = ({ errorMessage }) => {
	const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		if (loginDetails.email.includes('@') && loginDetails.password.length > 6) {
			console.log('fsdfsdfsdfsdf');
			//do action
			login(loginDetails);
		}
	};
	return (
		<div className='ui raised very padded text container segment'>
			<form className='ui form' onSubmit={handleSubmit}>
				<div className='field'>
					<label>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						required
						value={loginDetails.email}
						onChange={(e) =>
							setLoginDetails({
								...loginDetails,
								[e.target.id]: e.target.value,
							})
						}
					/>
				</div>
				<div className='field'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						required
						value={loginDetails.password}
						onChange={(e) =>
							setLoginDetails({
								...loginDetails,
								[e.target.id]: e.target.value,
							})
						}
					/>
				</div>
				{errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
				<button className='ui primary centered button'>Login</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	errorMessage: state.auth.loginError,
});

const mapDispatchToProps = {
	login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
