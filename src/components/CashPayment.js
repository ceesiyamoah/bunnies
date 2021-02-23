import React, { useEffect, useState } from 'react';
import { Button, Form, Header, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import history from './../history';
const CashPayment = ({ products, setOption, cart }) => {
	const [cashAmount, setCashAmount] = useState(null);
	const [total, setTotal] = useState(
		products.reduce((total, cur) => total + cur.unitPrice, 0)
	);
	const [change, setChange] = useState();
	useEffect(() => {
		if (!cart || !products) {
			history.push('/');
		} else {
		}
	}, [cart, products]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
				marginLeft: '40%',
			}}
		>
			<Header as='h3'>
				Total Charge: GH₵
				{total.toFixed(2)}
			</Header>
			<Form
				onSubmit={() => {
					setOption((state) => ({
						...state,
						second: { active: false, completed: true },
						third: { active: true },
					}));
				}}
			>
				<Input
					label='Amount'
					value={cashAmount}
					type='number'
					step='0.01'
					min='0'
					onChange={(e) => setCashAmount(e.target.value)}
					style={{ margin: '10px' }}
				/>

				<Button>Pay</Button>
			</Form>
			{cashAmount && (
				<Header as='h3'>
					Change: GH₵{-(total - parseInt(cashAmount)).toFixed(2)}
				</Header>
			)}
		</div>
	);
};
const mapStateToProps = (state) => {
	if (state.firestore.ordered.products) {
		return {
			products: state.firestore.ordered.products.filter((item) =>
				state.cart.join('').includes(item.id)
			),
			cart: state.cart,
		};
	}

	return { cart: state.cart };
};

export default connect(mapStateToProps, {})(CashPayment);
