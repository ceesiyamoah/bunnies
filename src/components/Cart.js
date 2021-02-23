import React, { useState } from 'react';
import CartItem from './CartItem';
import { Header, Divider, List, Grid, Button } from 'semantic-ui-react';
import { saveOrders } from '../actions/cartActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Modal from './Modal';
import history from './../history';
const Cart = ({ products, saveOrders, cart }) => {
	const [orderModalOpen, setOrderModalOpen] = useState(false);
	if (!products) {
		return null;
	}
	if (!cart.length) {
		return (
			<Header as='h2' textAlign='center'>
				Cart Empty
			</Header>
		);
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

				<Button
					color='green'
					floated='left'
					size='large'
					onClick={() => {
						history.push('/pay');
					}}
				>
					Pay
				</Button>

				<Modal
					open={orderModalOpen}
					setOpen={setOrderModalOpen}
					header='Enter order name'
					positiveAction={saveOrders}
				>
					<Button size='large'>Save Order</Button>
				</Modal>
				<Button color='red' size='small' floated='right'>
					Clear cart
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
			cart: state.cart,
		};
	}
	return {
		uid: state.firebase.auth.uid,
	};
};

export default compose(
	connect(mapStateToProps, { saveOrders }),
	firestoreConnect((ownProps) => [
		{
			collection: 'products',
			where: ['sellor', '==', ownProps.uid],
		},
	])
)(Cart);
