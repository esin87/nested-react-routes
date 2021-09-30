import { Link, useParams } from 'react-router-dom';

function Type(props) {
	const { type } = useParams();
	return (
		<div>
			This is a component for {type}
			<nav className='nav'>
				<div>
					<Link to={`/${type}/hunter`}>Hunter</Link>
				</div>
				<div>
					<Link to={`/${type}/explorer`}>Explorer</Link>
				</div>
			</nav>
		</div>
	);
}

export default Type;
