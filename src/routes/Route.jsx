/** @format */

import Home from '../screens/Home';
import Connexion from '../screens/Connexion';
import { Routes, Route } from 'react-router-dom';
import Tracks from '../components/Tracks';
import Search from '../components/Search';
import React from 'react';
import Main from '../components/Main';
import { useSelector } from 'react-redux/es/exports';
import YourLibrarie from '../components/YourLibrarie';
import Favorites from '../components/Favorites';
import Playlist from '../components/Playlist';

const LesRoutes = () => {
	const user = useSelector((state) => state.currentUser);
	return (
		<>
			<Routes>
				<Route path='/' element={<Connexion />} />
				<Route path='/home/' element={<Home />}>
					<Route path='' element={<Main />} />
					<Route path='tracks' element={<Tracks />} />
					<Route path='search' element={<Search />} />
					<Route path='library' element={<YourLibrarie />} />
					<Route path='favorites' element={<Favorites />} />
					<Route path='playlist' element={<Playlist />} />
				</Route>
			</Routes>
		</>
	);
};

export default LesRoutes;
