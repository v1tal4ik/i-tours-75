import Header from '../header';
import Tours from '../tours';
import Footer from '../footer';

const App = () => {
	const a = 5;
	return (
		<div className='app-container'>
			<Header />
			<Tours />
			<Footer>
				<div>
					123
					<p>456</p>
					<span>{a}</span>
				</div>
			</Footer>
		</div>
	);
};

export default App;
