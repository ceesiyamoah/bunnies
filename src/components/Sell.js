import React from 'react';
//!Add the tabs of categories
const Sell = () => {
	return (
		<>
			<div className='ui two column grid' style={{ margin: '5px' }}>
				<div className='eleven wide column'>
					<div className='ui icon input' style={{ width: '50%' }}>
						<input
							type='text'
							placeholder='Search...'
							spellCheck='false'
							data-ms-editor='true'
						/>
						<i className='search icon'></i>
					</div>
					<br />
					<br />
				</div>
				<div className='five wide column'>
					<div className='ui segment'>Cart</div>
				</div>
			</div>
		</>
	);
};

export default Sell;
