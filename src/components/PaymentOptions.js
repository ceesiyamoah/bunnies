import React, { useEffect, useState } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import CashPayment from './CashPayment';
import PaymentMethods from './PaymentMethods';
import MomoPayment from './MomoPayment';
const PaymentOptions = ({ changeStep, steps }) => {
	const [option, setOption] = useState('');
	useEffect(() => {}, [option]);
	return (
		<Segment placeholder basic>
			{steps.first.active && (
				<>
					<PaymentMethods
						setOption={setOption}
						option={option}
						changeStep={changeStep}
					/>

					<Divider vertical>Or</Divider>
				</>
			)}
			{steps.second.active && option === 'cash' ? (
				<CashPayment setOption={changeStep} />
			) : option === 'momo' ? (
				<MomoPayment setOption={changeStep} />
			) : null}
		</Segment>
	);
};

export default PaymentOptions;
