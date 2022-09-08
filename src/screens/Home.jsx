/** @format */
import React from 'react';
import PlayedItem from '../components/PlayedItem';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<div className='row position-relative h-100'>
			<div className='sidebar col-md-2 h-100'>
				<Sidebar />
			</div>
			<div className=' col-sm-12 col-md-10'>
				<div>
					<Outlet />
				</div>
				<div className=' position-fixed bottom-0 mb-auto'>
					<PlayedItem />
				</div>
			</div>
		</div>
	);
};

export default Home;
