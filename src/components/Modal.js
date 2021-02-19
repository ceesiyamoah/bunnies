import React, { useState } from 'react';
import { Button, Input, Modal as ModalSemantic } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Modal = ({ header, open, setOpen, children, positiveAction, cart }) => {
	const [orderName, setOrderName] = useState('');

	return (
		<ModalSemantic
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={children}
		>
			<ModalSemantic.Header>Enter order name</ModalSemantic.Header>
			<ModalSemantic.Content>
				<ModalSemantic.Description>
					<Input
						label='Name'
						value={orderName}
						onChange={(e) => setOrderName(e.target.value)}
					/>
				</ModalSemantic.Description>
			</ModalSemantic.Content>
			<ModalSemantic.Actions>
				<Button color='red' onClick={() => setOpen(false)}>
					Close
				</Button>
				<Button
					content='Save Order'
					labelPosition='right'
					icon='checkmark'
					onClick={() => {
						positiveAction(cart, orderName);
						setOpen(false);
					}}
					positive
					disabled={!orderName}
				/>
			</ModalSemantic.Actions>
		</ModalSemantic>
	);
};
const mapStateToProps = (state) => ({
	cart: state.cart,
});

export default connect(mapStateToProps, {})(Modal);
