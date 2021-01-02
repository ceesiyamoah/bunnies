import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from './../actions/authActions';
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
				<div className='ui secondary  menu'>
					{isVerified && (
						<>
							{MenuOptions.map(({ name, link }, index) => (
								<Link
									key={name}
									className={`${items[index] ? 'active' : ''} item`}
									onClick={() => changeMenu(index)}
									to={link}
								>
									{name}
								</Link>
							))}
						</>
					)}
					<div className='right menu'>
						<Link
							to='/addproduct'
							className='ui blue button'
							onClick={() => setItems(intialState)}
						>
							Add Product
						</Link>
						<button className='ui red button' onClick={signout}>
							Logout
						</button>
					</div>
				</div>
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
