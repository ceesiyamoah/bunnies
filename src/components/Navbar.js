import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from './../actions/authActions';
const MenuOptions = ['Sell', 'Inventory', 'Orders'];

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
							{MenuOptions.map((item, index) => (
								<Link
									className={`${items[index] ? 'active' : ''} item`}
									onClick={() => changeMenu(index)}
								>
									{item}
								</Link>
							))}
						</>
					)}
					<div className='right menu'>
						<Link className='ui item' onClick={signout}>
							Logout
						</Link>
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
