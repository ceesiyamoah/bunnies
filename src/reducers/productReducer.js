import { ADD_PRODUCT } from './../types/index';
const initialState = {};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_PRODUCT:
			return { ...state, ...payload };

		default:
			return state;
	}
};
export default productReducer;
