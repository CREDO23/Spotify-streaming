/** @format */
import image from '../assets/LogoMakr-9iOqpF.png';
import React from 'react';
import { Table } from 'react-bootstrap';

const Tracks = () => {
	return (
		<div className='w-100'>
			<div className='head-tracks w-100'>
				<div className=' m-5 d-inline-flex align-items-center'>
					<img src={image} alt='' />
					<div>
						<p className='h4 fw-normal'>Album</p>
						<p className='h2 fs-3 fw-bold'>Tokooos II Gold</p>
						<p className=' fw-light'>Fally Ipupa . 2022 . 37 Songs</p>
					</div>
				</div>
			</div>
			<div className='tracks'>
				<Table hover>
					<thead>
						<tr>
							<th className='f fs-6 fw-light'>#</th>
							<th className=' fw-light'>Title</th>
							<th className=' fw-light'>Album</th>
							<th className=' fw-light'>Time</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan={4}>
								<div>
									<img
										height='40px'
										width='60px'
										src={image}
										alt=''
									/>
								</div>
							</td>
						</tr>
						{}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Tracks;
