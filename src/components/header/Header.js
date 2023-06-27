import { useRef } from 'react';
import { useThemeContext } from 'hooks/useTheme';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const { theme, onChangeTheme } = useThemeContext();
	const inputRef = useRef(null);

	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<p ref={inputRef}>logo</p>

			<nav>
				<NavLink className='nav-item' to='/tours'>
					Tours
				</NavLink>
				<NavLink className='nav-item' to='/contact-us'>
					Contact us
				</NavLink>
				<NavLink className='nav-item' to='/support'>
					Support
				</NavLink>
			</nav>

			<button onClick={onChangeTheme}>Current Theme:{theme}</button>
		</header>
	);
};

export default Header;
