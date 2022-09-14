/** @format */

import React from 'react';
import logo from '../assets/LogoMakr-9iOqpF.png';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from '../store/actions/spotifyConnexionAction';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { setUserInfo } from '../store/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { getHomePlaylists } from '../store/actions/mediaAction';


const Connexion = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state) => state.token);
	const handleResponse = (response) => {
		dispatch(setUserInfo(jwt_decode(response.credential)));
		navigate('/home');
	};
console.log(import.meta.env.VITE_CLIENT_ID_GOOGLE)
	useEffect(() => {
		dispatch(refreshToken());
		dispatch(getHomePlaylists(token));
		google.accounts.id.initialize({
			client_id:import.meta.env.VITE_CLIENT_ID_GOOGLE,
			callback: handleResponse,
		});
		google.accounts.id.renderButton(
			document.querySelector('.login'),
			{ theme: 'outline', size: 'large' },
		);
	}, []);

	return (
		<Container className='fluid  vh-100 flex-column d-flex align-items-center justify-content-center'>
			<p className='h5 fs-4'>Welcome to RILLBY</p>
			<img className=' my-5' src={logo} alt='' />
			<div className='login'></div>
		</Container>
	);
};

export default Connexion;
