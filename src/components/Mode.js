import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

function Mode(props) {
	const { type, mode } = useParams();
	const [results, setResults] = useState([]);

	function getAnimeData() {
		// make fetch request to anime endpoint
		console.log('getting anime data');
	}

	function getMangaData() {
		// make fetch request to manga endpoint
		console.log('getting manga data');
	}

	useEffect(() => {
		if (mode === 'explorer') {
			if (type === 'anime') {
				// get anime data
				getAnimeData();
			} else if (type === 'manga') {
				// get manga data
				getMangaData();
			}
		}
	}, []);
	return (
		<div>
			This is a {type} {mode} component.
			{mode === 'hunter' && (
				<form>
					<input type='text' placeholder='e.g., Naruto' />
				</form>
			)}
			{mode === 'explorer' && (
				<div>These are random results for {type} explorer!</div>
			)}
		</div>
	);
}

export default Mode;
