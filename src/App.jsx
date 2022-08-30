/** @format */
import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Home from './screens/Home';
import { getToken } from './store/actions/spotifyConnexionAction';
import { useDispatch } from 'react-redux';
import Connexion from './screens/connexion';

const App = () => {
	const disatch = useDispatch();
	useEffect(() => {
		disatch(getToken());
	}, []);

	return (
		<Container fluid className=' vh-100'>
			<Connexion />
			<Home />
		</Container>
	);
};

export default App;
