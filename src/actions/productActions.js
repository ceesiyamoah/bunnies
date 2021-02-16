import history from '../history';

export const addProduct = (details) => async (
	dispatch,
	getState,
	{ getFirebase }
) => {
	getFirebase()
		.storage()
		.ref()
		.child(
			`images/products/${getState().firebase.auth.uid}/${
				details.manufacturerName + details.productName
			}`
		)
		.put(details.image)
		.then((snapshot) => {
			return snapshot.ref.getDownloadURL();
		})
		.then((downloadURL) => {
			getFirebase()
				.firestore()
				.collection('products')
				.doc(details.manufacturerName + details.productName)
				.set({
					...details,
					image: downloadURL,
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
		})
		.catch((err) => {
			console.log(err);
		});
};
