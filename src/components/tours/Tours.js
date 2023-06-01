import ToursItem from '../tours-item';
import clsx from 'clsx';
import './Tours.scss';
import { DARK, LIGHT } from 'constans';

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

const Tours = ({ theme }) => {
	// const getTheme = (value) => {
	// 	if (value === DARK) {
	// 		return {
	// 			background: '#000',
	// 			color: '#fff',
	// 		};
	// 	}
	// 	if (value === LIGHT) {
	// 		return {
	// 			background: '#fff',
	// 			color: '#000',
	// 		};
	// 	}
	// };
	return (
		<div
			className={clsx('tours-container', {
				dark: theme === DARK,
				light: theme === LIGHT,
			})}
			// style={getTheme(theme)}
		>
			<h1>Tours page</h1>

			<ul className='tours-list'>
				{toursArray.map((tour) => (
					<ToursItem key={tour.id} {...tour} theme={theme} />
				))}
			</ul>
		</div>
	);
};

export default Tours;
