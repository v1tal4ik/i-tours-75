import './Header.css';

const Header = ({ theme, onChangeTheme }) => {
	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<p>logo</p>
			<button onClick={onChangeTheme}>Current Theme:{theme}</button>
		</header>
	);
};

export default Header;
