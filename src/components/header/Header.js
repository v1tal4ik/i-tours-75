import { useEffect, useRef } from 'react';
import { useThemeContext } from 'hooks/useTheme';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
	const { theme, onChangeTheme } = useThemeContext();
	const inputRef = useRef(null);

	const navigate = useNavigate();
	const location = useLocation();

	const handleRedirect = () => {
		// navigate('secret', { replace: true });
		// navigate(-1);
		navigate('contact-us', { state: { from: location } });
	};

	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<p ref={inputRef}>logo</p>

			<nav>
				<NavLink
					className={({ isActive }) => `${css['nav-item']}  ${isActive ? css['active'] : ''}`}
					to='/tours'>
					Tours
				</NavLink>
				<NavLink className={css['nav-item']} to='/contact-us'>
					Contact us
				</NavLink>
				<NavLink className={css['nav-item']} to='/support'>
					Support
				</NavLink>
			</nav>

			<button onClick={handleRedirect}>Go to another route</button>

			<button onClick={onChangeTheme}>Current Theme:{theme}</button>
		</header>
	);
};

export default Header;
