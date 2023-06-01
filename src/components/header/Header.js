import './Header.css';

const Header = ({ theme }) => {
	return (
		<header
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<p>logo</p>
			<button>Current Theme:{theme}</button>
		</header>
	);
};

export default Header;
