import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ThemeProvider from 'hooks/useTheme';
import Header from 'components/header';
import Footer from 'components/footer';

import Tours from 'components/tours';
import ContactUs from 'components/contact-us/ContactUs';
// import Support from 'components/support/Support';

// Vanila css
// import './App.css';

import style from './App.module.css';
import TourDetails from 'components/tour-details/TourDetails';
import ContainerWrapper from 'components/container-wrapper/ContainerWrapper';

const Support = lazy(() => import('components/support'));

const App = () => {
	// const location = useLocation();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	console.log('location was changed');
	// 	alert('You change locationa');
	// }, [location.pathname]);

	// useEffect(() => {
	// 	navigate(location.pathname, { state: null });
	// }, [navigate, location.pathname]);

	return (
		<div className='app-container'>
			<ThemeProvider>
				<Header />
				<Suspense fallback={<div>loading...</div>}>
					<Routes>
						<Route path='/tours' element={<ContainerWrapper />}>
							<Route path='/tours' element={<Tours />}>
								<Route index element={<TourDetails />} />
							</Route>
							<Route path=':tourId/details' element={<TourDetails />} />
							<Route path='price' element={<>price</>} />
						</Route>

						<Route path='/contact-us' element={<ContactUs />} />
						<Route
							path='/secret'
							element={
								<div>
									<h1>Secret</h1>
								</div>
							}
						/>
						<Route path='/support' element={<Support />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</Suspense>

				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default App;
