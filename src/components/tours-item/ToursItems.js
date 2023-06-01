import PropTypes from 'prop-types';
import clsx from 'clsx';
import { DARK, LIGHT } from 'constans';

import css from './style.module.css';

const ToursItem = ({ name, price, continent, description, theme }) => {
	return (
		<li
			className={clsx(css['tour-item'], {
				dark: theme === LIGHT,
				light: theme === DARK,
			})}
			// className={`${!description ? css['error-item'] : css['success-item']}`}
		>
			<p>Name:{name}</p>
			<p>Price:{price}$</p>
			<p>Continent:{continent}</p>
			{description && <p>Description:{description}</p>}
		</li>
	);
};

ToursItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	continent: PropTypes.string.isRequired,
	description: PropTypes.string,
	theme: PropTypes.string.isRequired,
};

export default ToursItem;
