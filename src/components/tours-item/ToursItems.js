import PropTypes from 'prop-types';
import clsx from 'clsx';
import { DARK, LIGHT } from 'constans';

import css from './style.module.css';
import { useThemeContext } from 'hooks/useTheme';

const ToursItem = ({ id, name, price, continent, description, onDelete }) => {
	const { theme } = useThemeContext();

	return (
		<li
			className={clsx(css['tour-item'], {
				[css.dark]: theme === LIGHT,
				[css.light]: theme === DARK,
			})}
			// className={`${!description ? css['error-item'] : css['success-item']}`}
		>
			<p>Name:{name}</p>
			<p>Price:{price}$</p>
			<p>Continent:{continent}</p>
			{description && <p>Description:{description}</p>}
			<button onClick={() => onDelete(id)}>Delete</button>
		</li>
	);
};

ToursItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	continent: PropTypes.string.isRequired,
	description: PropTypes.string,
};

export default ToursItem;
