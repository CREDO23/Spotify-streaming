/** @format */
import React from 'react';
import PlayedItem from '../components/PlayedItem';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<div className='row h-100'>
			<div className='col-2 h-100'>
				<Sidebar />
			</div>

			<div className='col-10'>
				<div>
					<Outlet />
				</div>
				<div className='playedItem mb-auto'>
					<PlayedItem />
				</div>
			</div>
		</div>
	);
};

export default Home;
