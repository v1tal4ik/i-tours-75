import { useEffect, useState } from 'react';
import clsx from 'clsx';
import TourFormModal from 'components/tour-form-modal/TourFormModal';
import ToursItem from 'components/tours-item/ToursItems';
import { DARK, LIGHT } from 'constans';
import debounce from 'lodash.debounce';
import { fetchTours } from 'api/tours';
import useToggle from 'hooks/useToggle';

const ToursHooks = ({ theme }) => {
	const { visible, open, close } = useToggle(true);

	const [isLoading, setIsLoading] = useState(false);

	const [query, setQuery] = useState('');
	const [errorMessage, setError] = useState('');

	const [toursData, setToursData] = useState({
		total_items: 0,
		items: [],
	});

	// componentDidMount

	// useEffect(() => {
	// 	const loadTours = async () => {
	// 		setIsLoading(true);

	// 		const data = await fetchTours();
	// 		setToursData(data);

	// 		setIsLoading(false);
	// 	};

	// 	loadTours();
	// }, []);

	// componentDidMount + componentDidUpdate

	useEffect(() => {
		const loadTours = async () => {
			const data = await fetchTours(query);
			setToursData(data);
		};

		loadTours();
	}, [query]);

	// componentWillUnmount

	useEffect(() => () => console.log('componentWillUnmount'), []);

	// useEffect(() => {
	// 	console.log(theme);
	// 	if (theme === LIGHT) {
	// 		setVisible(true);
	// 	} else {
	// 		setVisible(false);
	// 	}
	// }, [theme]);

	const handleChangeQuery = debounce((e) => {
		setQuery(e.target.value);
	}, 1000);

	const toggleModal = () => {
		// setVisible((prevValue) => !prevValue);
	};

	console.log('render', visible);

	return (
		<>
			<TourFormModal
				visible={visible}
				onClose={close}
				// onAddTour={this.handleAddNewTour}
			/>

			<div
				className={clsx('tours-container', {
					dark: theme === DARK,
					light: theme === LIGHT,
				})}>
				<div className='tours-container__controlls'>
					<h1>Tours page</h1>
					<input
						id='search-input'
						type='text'
						placeholder='search...'
						onChange={handleChangeQuery}
					/>
					<button onClick={open}>Add tour</button>
				</div>

				{isLoading ? (
					<div>loading...</div>
				) : (
					<>
						{errorMessage ? (
							<p>{errorMessage}</p>
						) : (
							<>
								{/* {!!toursData.total_items && ( */}
								<div>
									<p>Total items:{toursData.total_items}</p>
									<ul className='tours-list'>
										{toursData.items.map((tour) => (
											<ToursItem
												{...tour}
												key={tour.id}
												theme={theme}
												// onDelete={this.handleRemoveTour}
											/>
										))}
									</ul>
								</div>
								{/* )} */}
							</>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default ToursHooks;
