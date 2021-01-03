import React, { useState } from 'react';
import { connect } from 'react-redux';
import { resetPassword } from './../actions/authActions';
import { Container, Form, Button } from 'semantic-ui-react';

//! resetError should show when user enters an invalid email
const ResetPassword = ({ resetPassword, resetError }) => {
	const [email, setEmail] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		resetPassword(email);
		setButtonDisabled(true);
	};

	return (
		<Container style={{ width: '40%' }}>
			<Form onSubmit={handleSubmit}>
				<Form.Input
					type='email'
					name='email'
					id='email'
					required
					label='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></Form.Input>
				{buttonDisabled ? (
					<Button disabled>Send Email</Button>
				) : (
					<Button primary>Send Email</Button>
				)}
			</Form>
		</Container>
	);
};
const mapStateToProps = (state) => ({
	resetError: state.auth.resetError,
});

const mapDispatchToProps = {
	resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
