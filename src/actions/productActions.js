import history from '../history';

export const addProduct = (details) => async (
	dispatch,
	getState,
	{ getFirebase }
) => {
	console.log(details);
	debugger;
	getFirebase()
		.firestore()
		.collection('products')
		.doc(details.manufacturerName + details.productName)
		.update({
			...details,
			sellor: getState().firebase.auth.uid,
			dateAdded: new Date(),
		})
		.then(() => {
			history.push('/sell');
			console.log(details);
		})
		.catch((err) => {
			console.log(err);
			console.log(details);
		});
};
