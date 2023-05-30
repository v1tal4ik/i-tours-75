import PropTypes from 'prop-types';

const ToursItem = ({ name, price, continent, description }) => {
	return (
		<li>
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
};

export default ToursItem;
