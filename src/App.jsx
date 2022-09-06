/** @format */
import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { getToken } from './store/actions/spotifyConnexionAction';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './routes/Route';
import PlayedItem from './components/PlayedItem';

const App = () => {
	const disatch = useDispatch();
	useEffect(() => {
		disatch(getToken());
	}, []);

	return (
		<Router>
			<Container fluid>
				<div>
					<Route />
				</div>
			</Container>
		</Router>
	);
};

export default App;
