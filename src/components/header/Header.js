import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ theme, onChangeTheme }) => {
	// componentDidMount

	// useEffect(() => {
	// 	console.log('work useEffect');
	// }, []);

	// console.log('render', toggle);

	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<p>logo</p>
			<Link to='/foo'>go to</Link>

			<button onClick={onChangeTheme}>Current Theme:{theme}</button>
		</header>
	);
};

export default Header;
