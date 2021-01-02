import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from './../actions/authActions';
import history from './../history';
//TODO beautify component
//TODO better user verification and errorMessage
const Login = ({ errorMessage, login, uid }) => {
	const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		if (loginDetails.email.includes('@') && loginDetails.password.length > 6) {
			login(loginDetails);
		}
	};

	useEffect(() => {
		if (uid) {
			history.push('/verify');
		}
	}, [uid]);
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
	uid: state.firebase.auth.uid,
});

const mapDispatchToProps = {
	login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
