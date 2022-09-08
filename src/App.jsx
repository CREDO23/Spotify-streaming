/** @format */
import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './routes/Route';

const App = () => {
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
