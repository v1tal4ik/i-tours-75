import Header from 'components/header';
import Tours from 'components/tours';
import Footer from 'components/footer';

// Vanila css
// import './App.css';

import style from './App.module.css';
import { DARK, LIGHT } from 'constans';

const App = () => {
	const theme = DARK;
	return (
		<div className='app-container'>
			<Header theme={theme} />
			<Tours theme={theme} />
			<Footer />
		</div>
	);
};

export default App;
