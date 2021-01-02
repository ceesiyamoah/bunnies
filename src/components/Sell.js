import React from 'react';
const categories = ['food', 'diapers', 'bags', 'bottles'];

const Sell = () => {
	return (
		<>
			<div class='ui two column grid' style={{ margin: '5px' }}>
				<div class='eleven wide column'>
					<div class='ui icon input' style={{ width: '50%' }}>
						<input
							type='text'
							placeholder='Search...'
							spellcheck='false'
							data-ms-editor='true'
						/>
						<i class='search icon'></i>
					</div>
					<br />
					<br />
				</div>
				<div class='five wide column'>
					<div className='ui segment'>Cart</div>
				</div>
			</div>
		</>
	);
};

export default Sell;
