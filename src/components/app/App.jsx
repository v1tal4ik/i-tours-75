import { Route, Routes } from 'react-router-dom';

import ThemeProvider from 'hooks/useTheme';
import Header from 'components/header';
import Tours from 'components/tours';
import Footer from 'components/footer';

// Vanila css
// import './App.css';

import style from './App.module.css';

const App = () => {
	return (
		<div className='app-container'>
			<ThemeProvider>
				<Header />

				<Routes>
					<Route path='/' element={<Tours />} />
					<Route path='/foo' element={<></>} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default App;
