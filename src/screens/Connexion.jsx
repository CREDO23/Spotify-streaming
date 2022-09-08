/** @format */

import React from 'react';
import logo from '../assets/LogoMakr-9iOqpF.png';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from '../store/actions/spotifyConnexionAction';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';

const Connexion = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	useEffect(() => {
		dispatch(refreshToken());
	}, []);
	const handleLogin = (googleData) => {
		console.log(googleData);
	};
	const handleFailure = (result) => {
		console.log(result);
	};
	return (
		<Container className='fluid  vh-100 flex-column d-flex align-items-center justify-content-center'>
			<p className='h5 fs-4'>Welcome to RILLBY</p>
			<img className=' my-5' src={logo} alt='' />
			<Link to='/home'>
				<Button
					onClick={() => {
						dispatch(getHomePlaylists(token));
					}}>
					Log In
				</Button>
			</Link>
		</Container>
	);
};

export default Connexion;
