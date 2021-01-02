import {
	LOGIN,
	LOGIN_ERROR,
	VERIFY,
	VERIFY_ERROR,
	LOGOUT,
} from './../types/index';
const initalState = { loginError: '', verifyError: '' };
const authReducer = (state = initalState, { type, payload }) => {
	switch (type) {
		case LOGIN:
			return state;
		case LOGIN_ERROR:
			return { ...state, loginError: payload };
		case VERIFY:
			return state;
		case VERIFY_ERROR:
			return { ...state, verifyError: payload };
		case LOGOUT:
			return initalState;
		default:
			return state;
	}
};

export default authReducer;
