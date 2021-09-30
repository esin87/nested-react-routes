import { Link, Switch, Route } from 'react-router-dom';

function Home(props) {
	return (
		<div>
			<nav className='nav'>
				<div>
					<Link to='/anime'>Anime</Link>
				</div>
				<div>
					<Link to='/manga'>Manga</Link>
				</div>
			</nav>
		</div>
	);
}

export default Home;
