import Header from 'components/header';
import Tours from 'components/tours';
import Footer from 'components/footer';

import { DARK, LIGHT } from 'constans';

// Vanila css
// import './App.css';

import style from './App.module.css';
import { Component } from 'react';

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
				<Tours theme={theme} />
				<Footer />
			</div>
		);
	}
}

export default App;
