import React, { useState } from 'react';
import { Button, Dropdown, Form, Icon, Image } from 'semantic-ui-react';
import { categories } from './../helpers/constants';

const initialState = {
	manufacturerName: '',
	productName: '',
	barcode: '',
	packagesInStore: 0,
	packagesInWarehouse: 0,
	unitPerPackage: 0,
	pricePerPackage: 0,
	unitPrice: 0,
	totalUnits: 0,
	lowStockNotification: 0,
};

const AddProduct = () => {
	const [productDetails, setProductDetails] = useState(initialState);
	const [selected, setSelected] = useState(null);
	const [imageFile, setImageFile] = useState(null);

	const handleChange = (e) => {
		console.log(e.target.name, productDetails[e.target.name]);
		if (e.target.type !== 'number') {
			setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
		} else {
			setProductDetails({
				...productDetails,
				[e.target.name]: +e.target.value,
			});
		}
	};
	const handlePicture = (e) => {
		console.log(e.target.files[0]);
		setImageFile(URL.createObjectURL(e.target.files[0]));
	};

	React.useEffect(() => {
		setProductDetails((state) => ({
			...state,
			totalUnits:
				(state.packagesInStore + state.packagesInWarehouse) *
				state.unitPerPackage,
		}));
	}, [
		productDetails.packagesInStore,
		productDetails.packagesInWarehouse,
		productDetails.unitPerPackage,
	]);

	return (
		<Form style={{ margin: '0 10%' }}>
			{/* header */}

			<Form.Group widths='equal'>
				<Form.Input
					fluid
					label='Manufacturer Name'
					required
					name='manufacturerName'
					value={productDetails.manufacturerName}
					onChange={handleChange}
				/>
				<Form.Input
					fluid
					label='Product Name'
					required
					name='productName'
					value={productDetails.productName}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Input
				label='Bar Code'
				placeholder='Barcode'
				name='barcode'
				value={productDetails.barcode}
				onChange={handleChange}
			/>
			<Form.Group widths='equal'>
				<Form.Input
					required
					label='Packages in store'
					type='number'
					min='0'
					name='packagesInStore'
					onChange={handleChange}
					value={productDetails.packagesInStore}
				/>
				<Form.Input
					required
					label='Packages in warehouse'
					type='number'
					min='0'
					name='packagesInWarehouse'
					onChange={handleChange}
					value={productDetails.packagesInWarehouse}
				/>
				<Form.Input
					label='Quantity per package'
					type='number'
					min='0'
					name='unitPerPackage'
					onChange={handleChange}
					value={productDetails.unitPerPackage}
				/>
				<Form.Input
					label='Price per package'
					type='number'
					min='0'
					name='pricePerPackage'
					onChange={handleChange}
					value={productDetails.pricePerPackage}
				/>
			</Form.Group>
			<Form.Group widths='equal'>
				<Form.Input
					label='Unit Price'
					type='number'
					min='0'
					step='.5'
					name='unitPrice'
					onChange={handleChange}
					value={productDetails.unitPrice}
				/>
				<Form.Input
					label='Total units'
					type='number'
					min='0'
					readOnly
					name='totalUnits'
					value={productDetails.totalUnits}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Input
					width={8}
					label='Low stock notification'
					type='number'
					min='0'
					name='lowStockNotification'
					onChange={handleChange}
					value={productDetails.lowStockNotification}
				/>

				<div
					style={{
						display: 'flex',
						alignItems: 'flex-end',
					}}
				>
					<Dropdown
						fluid
						placeholder='Select category'
						selection
						options={categories}
						value={selected}
						onChange={(e, data) => {
							setSelected(data.value);
						}}
					/>
				</div>
			</Form.Group>
			<Form.Input
				type='file'
				width='16'
				accept='image/x-png,image/gif,image/jpeg'
				onChange={handlePicture}
				name='image'
				icon={<Icon name='close' link onClick={() => setImageFile(null)} />}
			/>
			<Form.Field>
				<Image src={imageFile} size='small' />
			</Form.Field>
			<Button color='blue'> Submit</Button>
		</Form>
	);
};

export default AddProduct;

<form className='ui form'>
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
</form>;
