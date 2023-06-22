import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from 'hooks/useTheme';
import './Header.css';

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
			<Link to='/foo'>go to</Link>

			<button onClick={onChangeTheme}>Current Theme:{theme}</button>
		</header>
	);
};

export default Header;
