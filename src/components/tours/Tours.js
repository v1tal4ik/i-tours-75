import ToursItem from '../tours-item';
import clsx from 'clsx';
import './Tours.scss';
import { DARK, LIGHT } from 'constans';
import { Component } from 'react';
import debounce from 'lodash.debounce';
import TourFormModal from 'components/tour-form-modal/TourFormModal';
import { addTour, fetchTours, removeTour } from 'api/tours';

const initialState = {
	visible: false,
	query: '',
	total_items: 0,
	items: [],
	isLoading: false,
	errorMessage: '',
};

class Tours extends Component {
	state = initialState;

	handleFetchTours = async (query, shoudShowLoader = false) => {
		try {
			if (shoudShowLoader) {
				this.setState({ isLoading: true });
			}

			const { total_items, items } = await fetchTours(query);
			this.setState({
				total_items,
				items,
			});
		} catch (err) {
			this.setState({ errorMessage: err.toString() });
		} finally {
			if (shoudShowLoader) {
				this.setState({ isLoading: false });
			}
		}
	};

	async componentDidMount() {
		this.handleFetchTours(null, true);
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			this.handleFetchTours(this.state.query);
		}
	}

	handleChangeQuery = (event) => {
		this.setState({ query: event.target.value });
	};

	onOpenModal = () => {
		this.setState({ visible: true });
	};

	onCloseModal = () => {
		this.setState({ visible: false });
	};

	handleAddNewTour = async (tour) => {
		try {
			await addTour(tour);
			this.handleFetchTours();
		} catch (err) {
			this.setState({ errorMessage: err.toString() });
		}
	};

	handleRemoveTour = async (tourId) => {
		try {
			await removeTour(tourId);
			this.handleFetchTours();
		} catch (err) {
			this.setState({ errorMessage: err.toString() });
		}
	};

	render() {
		const { theme } = this.props;
		const { visible, total_items, items, isLoading, errorMessage } = this.state;
		return (
			<>
				<TourFormModal
					visible={visible}
					onClose={this.onCloseModal}
					onAddTour={this.handleAddNewTour}
				/>

				<div
					className={clsx('tours-container', {
						dark: theme === DARK,
						light: theme === LIGHT,
					})}
					// style={getTheme(theme)}
				>
					<div className='tours-container__controlls'>
						<h1>Tours page</h1>
						<input
							id='search-input'
							type='text'
							placeholder='search...'
							onChange={debounce(this.handleChangeQuery, 1000)}
						/>
						<button onClick={this.onOpenModal}>Add tour</button>
					</div>

					{isLoading ? (
						<div>loading...</div>
					) : (
						<>
							{errorMessage ? (
								<p>{errorMessage}</p>
							) : (
								<>
									{total_items && (
										<div>
											<p>Total items:{total_items}</p>
											<ul className='tours-list'>
												{items.map((tour) => (
													<ToursItem
														{...tour}
														key={tour.id}
														theme={theme}
														onDelete={this.handleRemoveTour}
													/>
												))}
											</ul>
										</div>
									)}
								</>
							)}
						</>
					)}
				</div>
			</>
		);
	}
}

export default Tours;
