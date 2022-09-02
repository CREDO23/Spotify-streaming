/** @format */

import Home from '../screens/Home';
import Connexion from '../screens/Connexion';
import { Routes, Route } from 'react-router-dom';
import Tracks from '../components/Tracks';
import React from 'react';
import Main from '../components/Main';
import { useSelector } from 'react-redux/es/exports';

const LesRoutes = () => {
	const token = useSelector((state) => state.token);
	return (
		<>
			<Routes>
				<Route path='/' element={<Connexion />} />
				<Route path='/home/' element={<Home />}>
					<Route path='tracks' element={<Tracks />} />
					<Route path='' element={<Main />} />
				</Route>
			</Routes>
		</>
	);
};

export default LesRoutes;
