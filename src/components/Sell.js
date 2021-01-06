import React from 'react';
import { Divider, Grid, Input, Segment } from 'semantic-ui-react';
//!Add the tabs of categories
const Sell = () => {
	return (
		<Grid columns={2} style={{ margin: '5px' }}>
			<Grid.Column width={11}>
				<Input icon='search' placeholder='search' size='large' fluid />
				<Divider />
				List
			</Grid.Column>
			<Grid.Column width={5}>
				<Segment>Cart</Segment>
			</Grid.Column>
		</Grid>
	);
};

export default Sell;
