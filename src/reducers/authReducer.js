import { LOGIN, LOGIN_ERROR } from './../types/index';
const authReducer = (state = { loginError: '' }, { type, payload }) => {
	switch (type) {
		case LOGIN:
			return state;
		case LOGIN_ERROR:
			return { ...state, loginError: payload };
		default:
			return state;
	}
};

export default authReducer;
