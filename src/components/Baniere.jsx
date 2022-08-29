/** @format */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images banieres/mus1.webp';
import img2 from '../assets/images banieres/mus2.jpeg';
import img3 from '../assets/images banieres/mus3.webp';

const Baniere = () => {
	return (
		<div className='carousel rounded-4'>
			<Carousel className=' h-100'>
				<Carousel.Item interval={3000}>
					<img
						className='rounded-2 w-100'
						src={img1}
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className='rounded-2 w-100'
						src={img2}
						alt='Second slide'
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className='rounded-2 w-100'
						src={img3}
						alt='Third slide'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Baniere;
