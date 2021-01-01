import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
	apiKey: 'AIzaSyCol1lhKd5XtcmDi9zMjnRckRgJU8-aWtY',
	authDomain: 'bunnies-294d5.firebaseapp.com',
	projectId: 'bunnies-294d5',
	storageBucket: 'bunnies-294d5.appspot.com',
	messagingSenderId: '88695604118',
	appId: '1:88695604118:web:9229ff92c14f46bbf913b7',
	measurementId: 'G-8HELYTHZ8S',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
