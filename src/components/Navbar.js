import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signout } from './../actions/authActions';
import { Button, Menu } from 'semantic-ui-react';
import history from '../history';
const MenuOptions = [
	{ name: 'Sell', link: '/sell' },
	{ name: 'Inventory', link: '/inventory' },
	{ name: 'Orders', link: '/orders' },
];
const intialState = Array.from(Array(MenuOptions.length).fill(false));

const Navbar = ({ uid, signout, isVerified }) => {
	const [items, setItems] = useState([true, false, false]);

	const changeMenu = (index) => {
		const newArr = Array.from(Array(items.length).fill(false));
		newArr[index] = true;
		setItems(newArr);
	};

	return (
		<>
			{uid && (
				<Menu secondary>
					{isVerified && (
						<>
							{MenuOptions.map(({ name, link }, index) => (
								<Menu.Item
									name={name}
									key={name}
									active={items[index]}
									onClick={() => {
										changeMenu(index);
										history.push(link);
									}}
								/>
							))}
						</>
					)}
					<Menu.Menu position='right'>
						<Button
							color='blue'
							onClick={() => {
								setItems(intialState);
								history.push('/addproduct');
							}}
						>
							Add Product
						</Button>
						<Button color='red' onClick={signout}>
							Logout
						</Button>
					</Menu.Menu>
				</Menu>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	uid: state.firebase.auth.uid,
	isVerified: state.firebase.auth.emailVerified,
});

const mapDispatchToProps = {
	signout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
