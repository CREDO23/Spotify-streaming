/** @format */

import React from 'react';
import { Container } from 'react-bootstrap';
import { FiPlay } from 'react-icons/fi';
import { GiHeadphones } from 'react-icons/gi';
import { useSelector } from 'react-redux';

const PlayedItem = () => {
	// const trackMinutes = Math.floor(time / 1000 / 60);
	// const trackSecondes = Math.floor((time / 100) % 60);
	const info = useSelector((state) => state.media.currentTrack.info);
	return (
		<Container className='d-flex h-1 align-items-center justify-content-between'>
			<div className=' d-inline-flex  align-items-center '>
				{/* {img ? (
					<img height='50px' width='50px'  alt='' />
				) : (
					<GiHeadphones />
				)} */}
				<div className='h-75 mx-4 my-1 align-items-start justify-content-evenly d-flex flex-column'>
					<p className='fs-6 fw-lighter m-0'></p>
					<p className='fs-7 fw-lighter m-0'></p>
				</div>
			</div>
			<div className=' d-flex align-items-center justify-content-center'>
				<FiPlay size={20} />
			</div>
			<div className=' d-flex justify-content-center align-items-center'>
				<p className='m-0 fs-7'>
					{/* <span>
						{trackMinutes
							? trackMinutes.toString().length == 1
								? '0' + trackMinutes
								: trackMinutes
							: '00'}
					</span>
					:
					<span>
						{trackSecondes
							? trackSecondes.toString().length == 1
								? '0' + trackSecondes
								: trackSecondes
							: '00'}
					</span> */}
				</p>
			</div>
		</Container>
	);
};

export default PlayedItem;
