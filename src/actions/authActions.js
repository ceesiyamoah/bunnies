import { LOGIN, LOGIN_ERROR, VERIFY, VERIFY_ERROR } from './../types/index';
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
