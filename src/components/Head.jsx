/** @format */

import React from 'react';
import Logo from '../assets/LogoMakr-9iOqpF.png';
import { useSelector } from 'react-redux';
import Menu from './MobileMenus';

const Head = () => {
	const user = useSelector((state) => state.currentUser);
	return (
		<div className=' h-auto w-100 p-1  d-flex justify-content-between '>
			<div>
				<Menu />
			</div>
			<img height='40px' width='40px' src={Logo} alt='' />
		</div>
	);
};

export default Head;
