/** @format */

import Home from '../screens/Home';
import Connexion from '../screens/Connexion';
import { Routes, Route } from 'react-router-dom';

import React from 'react';

const LesRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Connexion />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</>
	);
};

export default LesRoutes;
