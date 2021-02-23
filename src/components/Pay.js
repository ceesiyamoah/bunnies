import React, { useEffect, useState } from 'react';
import { Icon, Step } from 'semantic-ui-react';
import PaymentOptions from './PaymentOptions';
import { connect } from 'react-redux';
import history from '../history';

const Pay = ({ cart }) => {
	useEffect(() => {
		if (!cart.length) {
			history.push('/sell');
		}
	}, [cart]);
	const [steps, setSteps] = useState({
		first: { active: true, completed: false },
		second: { active: false, completed: false },
		third: { active: false, completed: false },
	});
	return (
		<>
			<Step.Group
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Step
					active={steps.first.active}
					completed={steps.first.completed}
					disabled={!steps.first.completed && !steps.first.active}
				>
					<Icon name='truck' />
					<Step.Content>
						<Step.Title>Payment Method</Step.Title>
						<Step.Description>Choose your payment method</Step.Description>
					</Step.Content>
				</Step>

				<Step
					active={steps.second.active}
					completed={steps.second.completed}
					disabled={!steps.second.completed && !steps.second.active}
				>
					<Icon name='payment' />
					<Step.Content>
						<Step.Title>Billing</Step.Title>
						<Step.Description>Enter billing information</Step.Description>
					</Step.Content>
				</Step>

				<Step
					active={steps.third.active}
					completed={steps.third.completed}
					disabled={!steps.third.completed && !steps.third.active}
				>
					<Icon name='info' />
					<Step.Content>
						<Step.Title>Confirm Order</Step.Title>
					</Step.Content>
				</Step>
			</Step.Group>
			<PaymentOptions changeStep={setSteps} steps={steps} cart={cart} />
		</>
	);
};

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps, {})(Pay);
