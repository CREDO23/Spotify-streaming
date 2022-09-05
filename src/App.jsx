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
			<Container fluid className=' vh-100'>
				<div>
					<Route />
				</div>
				{/* <div className='w-100 bg-prim border position-fixed bottom-0 start-0'>
					<PlayedItem />
				</div> */}
			</Container>
		</Router>
	);
};

export default App;
