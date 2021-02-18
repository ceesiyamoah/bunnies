import React, { useState } from 'react';
import { Divider, Grid, Input, Segment, Sticky } from 'semantic-ui-react';
import ProductList from './ProductList';
import Cart from './Cart';
//!Add the tabs of categories
const Sell = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<Grid columns={2} style={{ margin: '5px' }}>
			<Grid.Column width={11}>
				<Input
					icon='search'
					placeholder='search'
					size='large'
					fluid
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				/>

				<Divider />
				<ProductList searchTerm={searchTerm} />
			</Grid.Column>
			<Grid.Column width={5}>
				<Sticky offset={20}>
					<Segment>
						<Cart />
					</Segment>
				</Sticky>
			</Grid.Column>
		</Grid>
	);
};

export default Sell;
