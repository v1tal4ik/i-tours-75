import { Route, Routes } from 'react-router-dom';

import ThemeProvider from 'hooks/useTheme';
import Header from 'components/header';
import Footer from 'components/footer';

import Tours from 'components/tours';
import ContactUs from 'components/contact-us/ContactUs';
import Support from 'components/support/Support';

// Vanila css
// import './App.css';

import style from './App.module.css';
import TourDetails from 'components/tour-details/TourDetails';
import ContainerWrapper from 'components/container-wrapper/ContainerWrapper';

const App = () => {
	return (
		<div className='app-container'>
			<ThemeProvider>
				<Header />

				<Routes>
					<Route path='/tours' element={<ContainerWrapper />}>
						<Route index element={<Tours />} />
						<Route path=':tourId/details' element={<TourDetails />} />
						<Route path='price' element={<>price</>} />
					</Route>

					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/support' element={<Support />} />
					<Route
						path='*'
						element={
							<div>
								<h1>Not found</h1>
							</div>
						}
					/>
				</Routes>

				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default App;
