/** @format */
import React from 'react';
import { Table } from 'react-bootstrap';
import TrackItem from './TrackItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
const Tracks = () => {
	const currentPlayList = useSelector(
		(state) => state.media.currentPlayList,
	);
	const [info, setInfo] = useState();
	useEffect(() => {
		setTimeout(() => setInfo({ ...currentPlayList.info }), 500);
	}, [currentPlayList]);

	return (
		<div className='w-100'>
			<div className='head-tracks w-100'>
				<div className=' m-5 d-inline-flex align-items-center'>
					<img src='' alt='' />
					<div>
						<p className='h4 fw-normal'>{info?.type}</p>
						<p className='h2 fs-3 fw-bold'>
							{currentPlayList?.info?.nom}
						</p>
						<p className=' fw-light'>{`${info?.description}  ${info?.nmbrTracs}Songs`}</p>
					</div>
				</div>
			</div>
			<div className='tracks'>
				<Table hover>
					<thead>
						<tr>
							<th className='f fs-6 fw-light'>#</th>
						</tr>
					</thead>
					<tbody>
						{currentPlayList?.data?.items?.map((item, index) => {
							return (
								<tr index={index}>
									<td>
										<TrackItem
											img={item?.track?.album?.images[0].url}
											time={item?.track?.duration_ms}
											name={item?.track?.name}
											albumName={item?.track?.album?.name}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Tracks;
