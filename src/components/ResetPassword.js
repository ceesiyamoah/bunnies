import React, { useState } from 'react';
import { connect } from 'react-redux';
import { resetPassword } from './../actions/authActions';

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
		<div className='ui raised very padded text container segment'>
			<form className='ui form' onSubmit={handleSubmit}>
				<div className='field'>
					<label>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<br />
				<button
					className={`ui primary centered button ${
						buttonDisabled ? 'disabled' : ''
					} `}
				>
					Send Email
				</button>
			</form>
		</div>
	);
};
const mapStateToProps = (state) => ({
	resetError: state.auth.resetError,
});

const mapDispatchToProps = {
	resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
