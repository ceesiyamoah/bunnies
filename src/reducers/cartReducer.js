import { ADD_TO_CART, CLEAR_CART } from '../types';
import { REMOVE_FROM_CART } from './../types/index';

const cartReducer = (state = [], { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			if (!state.includes(payload)) {
				return [...state, payload];
			}
			return state;

		case REMOVE_FROM_CART:
			return state.filter((item) => item !== payload);
		case CLEAR_CART:
			return [];
		default:
			return state;
	}
};

export default cartReducer;
