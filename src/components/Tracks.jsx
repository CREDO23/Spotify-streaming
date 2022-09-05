/** @format */
import React from 'react';
import { Table } from 'react-bootstrap';
import TrackItem from './TrackItem';
import { useSelector } from 'react-redux';
import { GiHeadphones } from 'react-icons/gi';

const Tracks = () => {
	const data = useSelector(
		(state) => state.media.currentPlayList.data,
	);
	const info = useSelector(
		(state) => state.media.currentPlayList.info,
	);

	return (
		<div className='w-100'>
			<div className='head-tracks w-100'>
				<div className=' m-5 d-inline-flex align-items-center'>
					<img src='' alt='' />
					<div>
						<p className='h4 fw-normal'>{info?.type.toUpperCase()}</p>
						<p className='h2 fs-3 fw-bold'>{info?.nom}</p>
						<p className=' fw-light'>
							{info?.description}{' '}
							<span className=' fw-semibold'>
								{info?.nmbrTracs}Songs
							</span>
						</p>
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
						{data?.items?.map((item, index) => {
							return (
								<tr index={index}>
									<td>
										<TrackItem
											img={item?.track?.album?.images[0].url}
											icon={<GiHeadphones />}
											time={
												item?.track?.duration_ms
													? item?.track?.duration_ms
													: item.duration_ms
											}
											name={item?.track?.name}
											albumName={
												item?.track?.album?.name || item.name
											}
											preview={item?.track?.preview_url}
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
