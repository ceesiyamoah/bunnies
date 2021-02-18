import React from 'react';
import { List, Input, Label, Icon, Button } from 'semantic-ui-react';
import { capitalize } from './../utils/functions';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const CartItem = ({
	manufacturerName,
	productName,
	unitPrice,
	removeFromCart,
	id,
}) => {
	return (
		<List.Item>
			<List.Content floated='right'>
				<List.Header style={{ float: 'right' }}>
					GH₵ {unitPrice.toFixed(2)}
				</List.Header>
				<List.Description>
					{/* <Input
						type='number'
						min='0'
						label={
							<Label
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								x
							</Label>
						}
						style={{
							width: '70px',
							height: '30px',
							marginRight: '30px',
						}}
					/> */}
				</List.Description>
			</List.Content>
			<List.Content>
				<List.Header>{capitalize(productName)}</List.Header>
				<List.Description>{capitalize(manufacturerName)}</List.Description>
			</List.Content>
			<List.Content floated='right'>
				<Button
					icon='close'
					size='mini'
					circular
					onClick={() => {
						removeFromCart(id);
					}}
				/>
			</List.Content>
		</List.Item>
	);
};

export default connect(null, { removeFromCart })(CartItem);
