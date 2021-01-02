import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { sendVerificationEmail } from './../actions/authActions';
const VerifyAccount = ({ isVerified, sendVerificationEmail }) => {
	useEffect(() => {
		if (isVerified) {
			history.push('/sell');
		}
	}, [isVerified]);
	return (
		<div className='ui placeholder segment'>
			<div className='ui icon header'>
				<i className='check circle icon'></i>
				Please verify your email.
				<br />
				<em>Please refresh the page after verification</em>
			</div>
			<div className='inline'>
				<div className='ui primary button' onClick={sendVerificationEmail}>
					Send Verification email
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isVerified: state.firebase.auth.emailVerified,
});

const mapDispatchToProps = {
	sendVerificationEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccount);
