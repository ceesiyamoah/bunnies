import {
	LOGIN,
	LOGIN_ERROR,
	VERIFY,
	VERIFY_ERROR,
	LOGOUT,
	RESET_PASSWORD,
	RESET_PASSWORD_ERROR,
} from './../types/index';
const initalState = { loginError: '', verifyError: '', resetError: '' };
const authReducer = (state = initalState, { type, payload }) => {
	switch (type) {
		case LOGIN:
			return initalState;
		case LOGIN_ERROR:
			return { ...state, loginError: payload };
		case VERIFY:
			return initalState;
		case VERIFY_ERROR:
			return { ...state, verifyError: payload };
		case LOGOUT:
			return initalState;
		case RESET_PASSWORD:
			return initalState;
		case RESET_PASSWORD_ERROR:
			return { ...state, resetError: payload };
		default:
			return state;
	}
};

export default authReducer;
