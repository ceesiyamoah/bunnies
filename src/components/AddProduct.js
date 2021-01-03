import React from 'react';
import { categories } from './../helpers/constants';

//TODO CONVERT TO SEMANTIC UI REACT
const AddProduct = () => {
	return (
		<form className='ui form' style={{ margin: '0 10%' }}>
			<h4 className='ui dividing header'>Item Information</h4>
			<div className='field'>
				<label>Name</label>
				<div className='two fields'>
					<div className='field'>
						<input
							type='text'
							name='ManufacturerName'
							required
							placeholder='Manufacturer Name'
						/>
					</div>
					<div className='field'>
						<input type='text' name='ProductName' placeholder='Product Name' />
					</div>
				</div>
			</div>
			<div className='field'>
				<label>Barcode</label>
				<div className='field'>
					<input type='text' name='barcode' placeholder='Barcode' />
				</div>
			</div>
			<div className='field'>
				<label>Package Quantity</label>
				<div className='three fields'>
					<div className='field'>
						<input
							type='number'
							min='0'
							name='packagesInStore'
							required
							placeholder='Packages in store'
						/>
					</div>
					<div className='field'>
						<input
							type='number'
							min='0'
							name='packagesInWareHouse'
							placeholder='Packages in warehouse'
						/>
					</div>
					<div className='field'>
						<div className='ui labeled input'>
							{/* for value set the value of number to 2 decimal places */}
							<div className='ui label'>GHS</div>
							<input
								type='number'
								min='0'
								name='pricePerPackage'
								placeholder='Price per package'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='field'>
				<label>Unit</label>
				<div className='two fields'>
					<div className='field'>
						<div className='ui labeled input'>
							<div className='ui label'>GHS</div>
							<input
								type='number'
								min='0'
								name='unitPrice'
								placeholder='Unit Price'
							/>
						</div>
					</div>
					<div className='field'>
						<input
							type='number'
							min='0'
							name='totalUnits'
							placeholder='Total quantity of units'
						/>
					</div>
				</div>
			</div>
			<div className='field'>
				<label htmlFor=''>Low Stock Notification</label>
				<div className='two fields'>
					<div className='four wide field'>
						<input
							type='number'
							min='0'
							name='lowStockLevel'
							placeholder='Low stock notification level'
						/>
					</div>
					<div className='twelve wide field'>
						<div className='ui selection show dropdown'>
							<input type='hidden' name='gender' />
							<i className='dropdown icon'></i>
							<div className='default text'>Gender</div>
							<div className='menu'>
								<div className='item' data-value='1'>
									Male
								</div>
								<div className='item' data-value='0'>
									Female
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AddProduct;
