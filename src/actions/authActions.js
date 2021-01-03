import {
	LOGIN,
	LOGIN_ERROR,
	VERIFY,
	VERIFY_ERROR,
	LOGOUT,
	RESET_PASSWORD,
	RESET_PASSWORD_ERROR,
	CLEAR_ERROR,
} from './../types/index';
import history from './../history';

export const login = ({ email, password }) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			dispatch({ type: LOGIN });
			console.log('workigds');
			history.push('/verify');
		})
		.catch((err) => {
			dispatch({ type: LOGIN_ERROR, payload: err.message });
			setTimeout(() => {
				dispatch({ type: CLEAR_ERROR });
			}, 5000);
		});
};

export const sendVerificationEmail = () => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.auth()
		.currentUser.sendEmailVerification()
		.then(() => {
			dispatch({ type: VERIFY });
			history.push('/');
		})
		.catch((err) => {
			dispatch({ type: VERIFY_ERROR, payload: err.message });
		});
};

export const signout = () => (dispatch, getState, { getFirebase }) => {
	getFirebase()
		.auth()
		.signOut()
		.then(() => {
			dispatch({ type: LOGOUT });
			history.push('/');
		});
};

export const resetPassword = (email) => (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			dispatch({ type: RESET_PASSWORD });
			setTimeout(() => {
				history.push('/');
			}, 5000);
		})
		.catch((err) => {
			dispatch({ type: RESET_PASSWORD_ERROR, payload: err.message });
		});
};
