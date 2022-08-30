/** @format */
import React from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Home from './screens/Home';
import { getToken } from './store/actions/spotifyConnexionAction';
import { setUserInfo } from './store/actions/userAction';
import { useDispatch } from 'react-redux';

const App = () => {
	const disatch = useDispatch();
	useEffect(() => {
		disatch(getToken());
	}, []);

	return (
		<Container fluid className=' vh-100'>
			<Home />
		</Container>
	);
};

export default App;
