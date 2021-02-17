import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
const ProductList = ({ products, searchTerm }) => {
	console.log(products);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (products && products.length) {
			setRows([]);
			for (let i = 0; i < products.length; i = i + 4) {
				console.log(products.slice(i, i + 4));

				setRows((state) => [...state, products.slice(i, i + 4)]);
			}
			console.log(rows);
		}
	}, [products]);

	if (!products) {
		return <h1>Loading</h1>;
	}

	return (
		<>
			<Grid columns={4}>
				{rows.map((row) => (
					<Grid.Row key={row[0].barcode}>
						{row.map((item) => (
							<Grid.Column key={item.barcode}>
								<Product {...item} />
							</Grid.Column>
						))}
					</Grid.Row>
				))}
			</Grid>
		</>
	);
};

const mapStateToProps = (state, ownProps) => {
	let products = state.firestore.ordered.products;
	if (state.firestore.ordered.products && ownProps.searchTerm) {
		products = state.firestore.ordered.products.filter(
			(item) =>
				item.manufacturerName.toLowerCase().includes(ownProps.searchTerm) ||
				item.productName.toLowerCase().includes(ownProps.searchTerm) ||
				item.barcode.includes(ownProps.searchTerm)
		);
	}
	return {
		products: products,
		uid: state.firebase.auth.uid,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect((ownProps) => [
		{
			collection: 'products',
			where: ['sellor', '==', ownProps.uid],
		},
	])
)(ProductList);
