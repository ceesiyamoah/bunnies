import React from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PaymentMethods = ({ setOption, changeStep }) => {
	return (
		<Grid columns={2} relaxed='very' stackable centered>
			<Grid.Column
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Icon
					name='money'
					size='massive'
					color='green'
					link
					onClick={() => {
						setOption('cash');
						changeStep((state) => ({
							...state,
							first: { completed: true, active: false },
							second: { active: true },
						}));
					}}
				/>
			</Grid.Column>

			<Grid.Column
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					onClick={() => {
						setOption('momo');
						changeStep((state) => ({
							...state,
							first: { completed: true, active: false },
							second: { active: true },
						}));
					}}
					style={{ cursor: 'pointer' }}
				>
					<Image src='https://firebasestorage.googleapis.com/v0/b/bunnies-294d5.appspot.com/o/momo.png?alt=media&token=55330ea5-7661-45f3-93df-b40bc352fd68' />
				</div>
			</Grid.Column>
		</Grid>
	);
};

export default PaymentMethods;
