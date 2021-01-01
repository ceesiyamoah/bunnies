import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
});
