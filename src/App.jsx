/** @format */
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Home from './screens/Home';

const App = () => {
	return (
		<Container fluid className=' vh-100'>
			<Home />
		</Container>
	);
};

export default App;
