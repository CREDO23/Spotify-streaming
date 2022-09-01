/** @format */

import React from 'react';
import logo from '../assets/LogoMakr-9iOqpF.png';
import { Container } from 'react-bootstrap';

const TrackItem = () => {
	return (
		<Container className='row'>
			<div className=' col-11 d-inline-flex  align-items-center border '>
				<img height='50px' width='50px' src={logo} alt='' />
				<div className='h-75 mx-4 my-1 align-items-center justify-content-evenly d-flex flex-column'>
					<p className='fs-6 fw-lighter m-0'>Nom</p>
					<p className='fs-7 fw-lighter m-0'>Album</p>
				</div>
			</div>
			<div className=' col d-flex border justify-content-center align-items-center'>
				<p className='m-0 fs-7'>03:34</p>
			</div>
		</Container>
	);
};

export default TrackItem;
