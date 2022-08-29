/** @format */
import React from 'react';

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
const Home = () => {
	return (
		<div className='row h-100'>
			<div className='col-2 sidebar h-100'>
				<Sidebar />
			</div>
			<div className='col-10'>
				<Main />
			</div>
		</div>
	);
};

export default Home;
