/** @format */
import React from 'react';
import PlayedItem from '../components/PlayedItem';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHomePlaylists } from '../store/actions/mediaAction';

const Home = () => {
	return (
		<div className='row h-100'>
			<div className='sidebar col-md-2 h-100'>
				<Sidebar />
			</div>

			<div className=' col-sm-12 col-md-10'>
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
