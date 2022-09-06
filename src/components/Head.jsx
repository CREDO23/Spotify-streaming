/** @format */

import React from 'react';
import Logo from '../assets/LogoMakr-9iOqpF.png';
import { NavDropdown } from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from '../store/actions/spotifyConnexionAction';

const Head = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	return (
		<div className=' h-auto w-100 p-1  d-flex justify-content-between '>
			<img height='40px' width='40px' src={Logo} alt='' />

			<div className=' d-inline-flex flex-row align-items-center w-auto '>
				<NavDropdown
					className=' d-inline '
					id='nav-dropdown-dark-example'
					title={`${user?.name ? user.name : ''}`}
					menuVariant='dark'>
					<NavDropdown.Item onClick={() => dispatch(refreshToken())}>
						Your Profile
					</NavDropdown.Item>
				</NavDropdown>
				{user?.url ? (
					<img
						height='40px'
						className=' rounded-circle ms-2'
						width='40px'
						src={user.url}
						alt=''
					/>
				) : (
					<BiUserCircle className='ms-2' size={30} />
				)}
			</div>
		</div>
	);
};

export default Head;
