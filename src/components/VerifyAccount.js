import React from 'react';
const VerifyAccount = () => {
	return (
		<div className='ui placeholder segment'>
			<div class='ui icon header'>
				<i className='check circle icon'></i>
				Please verify your email
			</div>
			<div class='inline'>
				<div class='ui primary button'>Send Verification email</div>
			</div>
		</div>
	);
};

export default VerifyAccount;
