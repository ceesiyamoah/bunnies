import React from 'react';
import CartItem from './CartItem';
import { Header, Divider, List, Grid, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
const Cart = ({ products }) => {
	if (!products) {
		return null;
	}
	return (
		<>
			<Header as='h2' textAlign='center'>
				Cart
			</Header>
			<Divider />
			<List divided verticalAlign='middle'>
				{products.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
				<Divider />
				<Grid>
					<Grid.Column width={12}>Total</Grid.Column>
					<Grid.Column width={4} floated='right'>
						<b>
							GH₵{' '}
							{products
								.reduce((sum, curr) => sum + curr.unitPrice, 0)
								.toFixed(2)}
						</b>
					</Grid.Column>
				</Grid>
				<Divider />

				<Button color='green' floated='left'>
					Pay
				</Button>
				<Button
					color='red'
					size='small'
					style={{ display: 'flex', alignItems: 'center' }}
				>
					Clear cart
				</Button>
				<Button size='small' floated='right'>
					Save Order
				</Button>
			</List>
		</>
	);
};
const mapStateToProps = (state) => {
	if (state.firestore.ordered.products) {
		return {
			products: state.firestore.ordered.products.filter((item) =>
				state.cart.join('').includes(item.id)
			),
			uid: state.firebase.auth.uid,
		};
	}
	return {
		uid: state.firebase.auth.uid,
	};
};

export default compose(
	connect(mapStateToProps, {}),
	firestoreConnect((ownProps) => [
		{
			collection: 'products',
			where: ['sellor', '==', ownProps.uid],
		},
	])
)(Cart);
