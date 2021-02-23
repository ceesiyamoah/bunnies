import React, { useEffect, useState } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import CashPayment from './CashPayment';
import PaymentMethods from './PaymentMethods';
import MomoPayment from './MomoPayment';
import Receipt from './Receipt';
import history from './../history';
const PaymentOptions = ({ changeStep, steps, cart }) => {
	const [option, setOption] = useState('');
	const [amountPaid, setAmountPaid] = useState(null);

	useEffect(() => {
		if (!cart.length) {
			history.push('/sell');
		}
	}, [cart]);

	return (
		<Segment placeholder basic>
			{steps.first.active && (
				<>
					<PaymentMethods
						setOption={setOption}
						option={option}
						changeStep={changeStep}
						cart={cart}
					/>

					<Divider vertical>Or</Divider>
				</>
			)}
			{steps.second.active && option === 'cash' ? (
				<CashPayment
					setOption={changeStep}
					amountPaid={amountPaid}
					setAmountPaid={setAmountPaid}
				/>
			) : option === 'momo' ? (
				<MomoPayment
					setOption={changeStep}
					amountPaid={amountPaid}
					setAmountPaid={setAmountPaid}
				/>
			) : null}
			{steps.third.active && (
				<>
					<Receipt amountPaid={amountPaid} />
				</>
			)}
		</Segment>
	);
};

export default PaymentOptions;
