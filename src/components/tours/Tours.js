import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TourFormModal from 'components/tour-form-modal/TourFormModal';
import ToursItem from 'components/tours-item/ToursItems';
import debounce from 'lodash.debounce';
import { addTour, fetchTours } from 'api/tours';
import useToggle from 'hooks/useToggle';

const ToursHooks = () => {
	const { visible, open, close } = useToggle(false);

	const [isLoading, setIsLoading] = useState(false);

	const [query, setQuery] = useState('');
	const [errorMessage, setError] = useState('');

	const [toursData, setToursData] = useState({
		total_items: 0,
		items: [],
	});

	// Prevent request on first render

	// const isFirstRender = useRef(true);

	// useEffect(() => {
	// 	if (isFirstRender.current) {
	// 		isFirstRender.current = false;
	// 		return;
	// 	}

	// 	const loadTours = async () => {
	// 		const data = await fetchTours(query);
	// 		setToursData(data);
	// 	};

	// 	loadTours();
	// }, [query]);

	// const loadTours = useCallback(async () => {
	// 	const data = await fetchTours(query);
	// 	setToursData(data);
	// }, [query]);

	// componentDidMount + componentDidUpdate

	useEffect(() => {
		const load = async () => {
			const data = await fetchTours(query);
			setToursData(data);
		};
		load();
	}, []);

	// componentWillUnmount

	useEffect(() => () => console.log('componentWillUnmount'), []);

	const handleChangeQuery = debounce((e) => {
		setQuery(e.target.value);
	}, 1000);

	const handleAddNewTour = async (tour) => {
		await addTour(tour);
		// loadTours();
	};

	const filteredItemsCached = useMemo(
		() =>
			toursData.items.filter((el) => {
				return el.name.toLowerCase().includes(query.toLowerCase());
			}),
		[toursData.items, query]
	);

	return (
		<>
			<TourFormModal visible={visible} onClose={close} onAddTour={handleAddNewTour} />

			<div className='tours-container'>
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
										{filteredItemsCached.map((tour) => (
											<ToursItem
												{...tour}
												key={tour.id}
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
