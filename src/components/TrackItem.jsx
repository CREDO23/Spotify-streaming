/** @format */

import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { playTrack } from '../store/actions/mediaAction';

const TrackItem = ({ img, time, name, albumName, preview }) => {
	const trackMinutes = Math.floor(time / 1000 / 60);
	const trackSecondes = Math.floor((time / 100) % 60);
	const dispatch = useDispatch();

	return (
		<Container
			onClick={() =>
				dispatch(playTrack({ img, time, name, albumName, preview }))
			}
			className='row'>
			<div className=' col-11 d-inline-flex  align-items-center '>
				<img height='50px' width='50px' src={img} alt='' />
				<div className='h-75 mx-4 my-1 align-items-start justify-content-evenly d-flex flex-column'>
					<p className='fs-6 fw-lighter m-0'>{name}</p>
					<p className='fs-7 fw-lighter m-0'>{albumName}</p>
				</div>
			</div>
			<div className=' col d-flex justify-content-center align-items-center'>
				<p className='m-0 fs-7'>
					<span>
						{trackMinutes.toString().length == 1
							? '0' + trackMinutes
							: trackMinutes}
					</span>
					:
					<span>
						{trackSecondes.toString().length == 1
							? '0' + trackSecondes
							: trackSecondes}
					</span>
				</p>
			</div>
		</Container>
	);
};

export default TrackItem;
