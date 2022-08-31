/** @format */

import React from 'react';
import logo from '../assets/LogoMakr-9iOqpF.png';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAccess } from '../store/actions/spotifyConnexionAction';
import { Link } from 'react-router-dom';

const Connexion = () => {
	const dispatch = useDispatch();

	return (
		<Container className='fluid h-100 flex-column d-flex align-items-center justify-content-center'>
			<p className='h5 fs-4'>Welcome to RILLBY</p>
			<img className=' my-5' src={logo} alt='' />
			<Link to='/home'>
				<Button
					onClick={() => {
						dispatch(getAccess());
					}}>
					Connectez-vous
				</Button>
			</Link>
		</Container>
	);
};

export default Connexion;
