import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import history from '../history';
const Receipt = ({ amountPaid, itemsBought, cart }) => {
	const [total, setTotal] = useState(
		itemsBought.reduce((total, cur) => total + cur.unitPrice, 0)
	);
	useEffect(() => {
		if (!cart.length || !itemsBought.length) {
			history.push('/sell');
		} else {
		}
	});
	return (
		<div>
			Total:GH {total.toFixed(2)}
			<Button color='blue'>Print receipt</Button>
		</div>
	);
};

const mapStateToProps = (state) => {
	if (state.firestore.ordered.products) {
		return {
			itemsBought: state.firestore.ordered.products.filter((item) =>
				state.cart.join('').includes(item.id)
			),
			cart: state.cart,
		};
	}

	return { cart: state.cart };
};

export default connect(mapStateToProps, {})(Receipt);
