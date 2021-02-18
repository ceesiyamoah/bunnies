import { ADD_TO_CART, CLEAR_CART } from '../types';
import { REMOVE_FROM_CART } from './../types/index';

export const addToCart = (item) => (dispatch) => {
	dispatch({ type: ADD_TO_CART, payload: item });
};

export const removeFromCart = (id) => (dispatch) => {
	dispatch({ type: REMOVE_FROM_CART, payload: id });
};

export const clearCart = () => (dispatch) => {
	dispatch({ type: CLEAR_CART });
};
