import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Mode from './components/Mode';
import Type from './components/Type';

function App() {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Route path='/' exact component={Home} />
			<Route path='/:type' exact component={Type} />
			<Route path='/:type/:mode' exact component={Mode} />
		</div>
	);
}

export default App;
