/** @format */

import React, { useEffect } from 'react';
import Logo from '../assets/LogoMakr-9iOqpF.png';
import { NavDropdown } from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getAccess } from '../store/actions/spotifyConnexion';

const Head = () => {
	const dispatch = useDispatch();
	return (
		<div className=' h-auto w-100 p-1  d-flex justify-content-between '>
			<img height='40px' width='40px' src={Logo} alt='' />

			<div className=' d-inline-flex flex-row align-items-center w-auto '>
				<NavDropdown
					className=' d-inline '
					id='nav-dropdown-dark-example'
					title='Credo Th'
					menuVariant='dark'>
					<NavDropdown.Item onClick={() => dispatch(getAccess())}>
						Déconnexion
					</NavDropdown.Item>
				</NavDropdown>
				<BiUserCircle className='ms-2' size={30} />
			</div>
		</div>
	);
};

export default Head;
