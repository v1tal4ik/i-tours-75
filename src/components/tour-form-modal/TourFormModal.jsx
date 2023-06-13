import React, { Component } from 'react';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';
import './style.scss';
import { Link } from 'react-router-dom';

const continentOptions = [
	'Asia',
	'Africa',
	'North America',
	'South America',
	'Antarctica',
	'Europe',
	'Australia',
];

class TourFormModal extends Component {
	state = {
		// name: '',
		// price: '',
		// continent: '',
		// description: '',
		isDescription: false,
	};

	// handleChangeName = (event) => {
	// 	this.setState({ name: event.target.value });
	// };

	// handleChangePrice = (event) => {
	// 	this.setState({ price: event.target.value });
	// };

	// handleChangeSelect = (e) => {
	// 	console.log(e.target.value);
	// 	this.setState({ continent: e.target.value });
	// };

	handleChangeCheckbox = (e) => {
		this.setState({ isDescription: e.target.checked });
	};

	// handleChangeTextArea = (e) => {
	// 	this.setState({ description: e.target.value });
	// };

	// handleChangeInput = ({ target: { name, value } }) => {
	// 	this.setState({ [name]: value });
	// };

	handleSubmit = (event) => {
		event.preventDefault();

		const tour = {
			id: Math.ceil(Math.random() * 10000),
			name: event.target.elements.name.value,
			price: +event.target.elements.price.value,
			continent: event.target.elements.continent.value,
		};

		if (this.state.isDescription) {
			tour.description = event.target.elements.description.value;
		}
		this.props.onAddTour(tour);
		this.props.onClose();
	};

	render() {
		const { visible, onClose } = this.props;
		const { isDescription } = this.state;
		return (
			<Rodal visible={visible} onClose={onClose} height={600}>
				<div>
					<h4>Add new Tour</h4>

					<form className='tour-form-container' onSubmit={this.handleSubmit}>
						<input
							className='form-input'
							name='name'
							type='text'
							// value={name}
							placeholder='tour name...'
							// onChange={this.handleChangeInput}
						/>
						<input
							className='form-input'
							name='price'
							type='number'
							// value={price}
							placeholder='tour price...'
							// onChange={this.handleChangeInput}
						/>
						<select
							className='form-input'
							name='continent'
							defaultValue=''
							onChange={this.handleChangeInput}>
							<option value='' hidden></option>
							{continentOptions.map((el) => (
								<option key={el} value={el}>
									{el}
								</option>
							))}
						</select>

						<div>
							<label htmlFor='foo'>with description</label>
							<input
								id='foo'
								name='isDescription'
								type='checkbox'
								checked={isDescription}
								onChange={this.handleChangeCheckbox}
							/>
						</div>

						{isDescription && (
							<textarea
								row={5}
								column={10}
								className='form-input'
								type='text'
								name='description'
								placeholder='description...'
								// onChange={this.handleChangeTextArea}
							/>
						)}

						<input type='submit' value='Save' />
					</form>
				</div>
			</Rodal>
		);
	}
}

export default TourFormModal;
