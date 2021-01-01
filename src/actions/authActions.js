import { LOGIN, LOGIN_ERROR } from './../types/index';
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
			history.push('/verify');
		})
		.catch((err) => {
			dispatch({ type: LOGIN_ERROR, payload: err.message });
		});
};
