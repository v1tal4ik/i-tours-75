import Header from 'components/header';
import Tours from 'components/tours';
import Footer from 'components/footer';

import { DARK, LIGHT } from 'constans';

// Vanila css
// import './App.css';

import style from './App.module.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
	state = {
		theme: LIGHT,
	};

	handleChangeTheme = () => {
		this.setState((prevState) => ({ theme: prevState.theme === DARK ? LIGHT : DARK }));
	};

	render() {
		const { theme } = this.state;
		return (
			<div className='app-container'>
				<Header theme={theme} onChangeTheme={this.handleChangeTheme} />

				<Routes>
					<Route path='/' element={<Tours theme={theme} />} />
					<Route path='/foo' element={<></>} />
				</Routes>

				<Footer />
			</div>
		);
	}
}

export default App;
