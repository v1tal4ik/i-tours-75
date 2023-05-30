import ToursItem from '../tours-item';

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

const Tours = () => {
	return (
		<div className='tours-container'>
			<h1>Tours page</h1>

			<ul className='tours-list'>
				{toursArray.map((tour) => (
					<ToursItem key={tour.id} {...tour} />
				))}
			</ul>
		</div>
	);
};

export default Tours;
