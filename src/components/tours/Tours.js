import ToursItem from '../tours-item';
import clsx from 'clsx';
import './Tours.scss';
import { DARK, LIGHT } from 'constans';
import { Component } from 'react';
import debounce from 'lodash.debounce';
import TourFormModal from 'components/tour-form-modal/TourFormModal';
import { fetchFilteredTours, fetchTours } from 'helpers';

const initialState = {
	visible: false,
	query: '',
	total_items: 0,
	items: [],
	isLoading: false,
};

class Tours extends Component {
	state = initialState;

	async componentDidMount() {
		this.setState({ isLoading: true });

		await fetchTours();

		this.setState({ isLoading: false });

		const { total_items, items } = await fetchTours();

		this.setState({
			isLoading: false,
			total_items,
			items,
		});
	}

	shouldComponentUpdate(_, nextState) {
		if (this.state.isLoading && !nextState.isLoading && this.state.total_items === 0) {
			return false;
		}
		return true;
	}

	async componentDidUpdate(prevProps, prevState) {
		console.log('work');
		if (prevState.query !== this.state.query) {
			this.setState({ isLoading: true });
			const { total_items, items } = await fetchFilteredTours(this.state.query);
			this.setState({
				isLoading: false,
				total_items,
				items,
			});
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

	addNewTour = (tour) => {
		this.setState((prevState) => ({ items: [...prevState.items, tour] }));
	};

	// handleFilterQuery = () => {
	// 	const items = toursArray.filter(
	// 		(el) =>
	// 			el.name.toLowerCase().includes(this.state.query.toLowerCase()) &&
	// 			el.continent.toLowerCase().includes(this.state.query.toLowerCase())
	// 	);
	// 	this.setState({ items });
	// };

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		const { theme } = this.props;
		const { visible, query, total_items, items, isLoading } = this.state;
		// console.log(this.state);
		return (
			<>
				<TourFormModal visible={visible} onClose={this.onCloseModal} onAddTour={this.addNewTour} />

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
						{/* <button onClick={this.handleFilterQuery}>Search</button> */}
						<button onClick={this.onOpenModal}>Add tour</button>
					</div>

					{isLoading ? (
						<div>loading...</div>
					) : (
						<>
							{total_items && (
								<div>
									<p>Total items:{total_items}</p>
									<ul className='tours-list'>
										{items
											// .filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
											.map((tour) => (
												<ToursItem key={tour.id} {...tour} theme={theme} />
											))}
									</ul>
								</div>
							)}
						</>
					)}
				</div>
			</>
		);
	}
}

export default Tours;
