import React, { useState } from 'react';
import { Divider, Grid, Input, Segment } from 'semantic-ui-react';
import ProductList from './ProductList';
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
				<Segment>Cart</Segment>
			</Grid.Column>
		</Grid>
	);
};

export default Sell;
