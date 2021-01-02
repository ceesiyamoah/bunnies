import { LOGIN, LOGIN_ERROR, VERIFY, VERIFY_ERROR } from './../types/index';
const authReducer = (
	state = { loginError: '', verifyError: '' },
	{ type, payload }
) => {
	switch (type) {
		case LOGIN:
			return state;
		case LOGIN_ERROR:
			return { ...state, loginError: payload };
		case VERIFY:
			return state;
		case VERIFY_ERROR:
			return { ...state, verifyError: payload };
		default:
			return state;
	}
};

export default authReducer;
