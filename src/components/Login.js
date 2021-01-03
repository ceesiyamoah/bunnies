import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from './../actions/authActions';
import history from './../history';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Message } from 'semantic-ui-react';
//TODO center form
const Login = ({ errorMessage, login, uid }) => {
	const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
	const handleSubmit = (e) => {
		e.preventDefault();

		login(loginDetails);
	};

	useEffect(() => {
		if (uid) {
			history.push('/verify');
		}
	}, [uid]);
	return (
		<Container style={{ width: '40%' }}>
			<Form onSubmit={handleSubmit} error={errorMessage ? true : false}>
				<Form.Field>
					<Form.Input
						label='Email'
						type='email'
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
				</Form.Field>
				<Form.Field>
					<Form.Input
						label='Password'
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
				</Form.Field>

				{errorMessage && <Message error content={errorMessage} />}
				<Button primary>Login</Button>
				<Link to='/resetpassword'>Forgot Password?</Link>
			</Form>
		</Container>
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
