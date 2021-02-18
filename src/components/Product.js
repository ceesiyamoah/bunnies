import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { capitalize } from './../utils/functions';
import { connect } from 'react-redux';
import { addToCart } from './../actions/cartActions';
const Product = ({
	manufacturerName,
	productName,
	category,
	image,
	unitPrice,
	id,
	addToCart,
}) => {
	return (
		<Card>
			<Image src={image} alt={productName} centered />
			<Card.Content>
				<Card.Header>{capitalize(productName)}</Card.Header>
				<Card.Meta>{capitalize(manufacturerName)}</Card.Meta>
				{category && <Card.Meta>{category}</Card.Meta>}
				<Card.Description>
					<b>GH₵ {unitPrice.toFixed(2)}</b>
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div className='ui two buttons'>
					<Button
						color='blue'
						onClick={() => {
							addToCart(id);
						}}
					>
						Add to cart
					</Button>
				</div>
			</Card.Content>
		</Card>
	);
};

export default connect(null, { addToCart })(Product);
