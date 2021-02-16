import React, { useState } from 'react';
import { Button, Dropdown, Form, Icon, Image } from 'semantic-ui-react';
import { addProduct } from '../actions/productActions';
import { categories } from './../helpers/constants';
import { connect } from 'react-redux';
import firebase from './../firebase';
const storage = firebase.storage();

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
	image: null,
	category: null,
};

const AddProduct = ({ addProduct, uid }) => {
	const [productDetails, setProductDetails] = useState(initialState);
	const [imgPreview, setImgPreview] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();

		addProduct(productDetails);
	};

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
		if (e.target.files[0]) {
			setProductDetails({ ...productDetails, image: e.target.files[0] });
			setImgPreview(URL.createObjectURL(e.target.files[0]));
		}
	};
	const clearImage = () => {
		setProductDetails({ ...productDetails, image: null });
		setImgPreview(null);
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
		<Form style={{ margin: '0 10%' }} onSubmit={handleSubmit}>
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
						value={productDetails.category}
						onChange={(e, data) => {
							setProductDetails({ ...productDetails, category: data.value });
						}}
					/>
				</div>
			</Form.Group>
			{/* The name of the file should change to no file chosen when a user clears the field */}
			<Form.Input
				type='file'
				width='16'
				accept='image/x-png,image/gif,image/jpeg'
				onChange={handlePicture}
				icon={<Icon name='close' link onClick={clearImage} />}
				required
			/>
			<Form.Field>
				<Image src={imgPreview} size='small' />
			</Form.Field>
			<Button color='blue'> Submit</Button>
		</Form>
	);
};

const mapStateToProps = (state) => ({
	uid: state.firebase.auth.uid,
});

const mapDispatchToProps = {
	addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
