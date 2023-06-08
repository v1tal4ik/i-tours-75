import ToursItem from '../tours-item';
import clsx from 'clsx';
import './Tours.scss';
import { DARK, LIGHT } from 'constans';
import { Component } from 'react';
import debounce from 'lodash.debounce';
import TourFormModal from 'components/tour-form-modal/TourFormModal';

const toursArray = [
	{
		id: 1,
		name: 'Portugalia vibe',
		price: 3000,
		continent: 'Europe',
		description: 'Best tour for discover Portugal',
	},
	{
		id: 2,
		name: 'The breath of Italy',
		price: 5000,
		continent: 'Europe',
		// description: 'Best tour for discover Italia',
	},
	{
		id: 3,
		name: 'Spanish bullfight',
		price: 1000,
		continent: 'Europe',
		description: 'A new experience from watching a bullfight',
	},
	{
		id: 4,
		name: 'Germany race',
		price: 15000,
		continent: 'Europe',
		// description: 'A quick walk on the German autobahns',
	},
	{
		id: 5,
		name: 'Indian traditions',
		price: 123,
		continent: 'Asia',
		// description: 'Best tour for discover Asia',
	},
];

class Tours extends Component {
	state = {
		visible: false,
		query: '',
		items: toursArray,
	};

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

	render() {
		const { theme } = this.props;
		const { visible, query, items } = this.state;
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
							type='text'
							placeholder='search...'
							onChange={debounce(this.handleChangeQuery, 1000)}
						/>
						{/* <button onClick={this.handleFilterQuery}>Search</button> */}
						<button onClick={this.onOpenModal}>Add tour</button>
					</div>

					<ul className='tours-list'>
						{items
							.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
							.map((tour) => (
								<ToursItem key={tour.id} {...tour} theme={theme} />
							))}
					</ul>
				</div>
			</>
		);
	}
}

export default Tours;
