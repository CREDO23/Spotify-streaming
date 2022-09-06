/** @format */
import React from 'react';
import { Table } from 'react-bootstrap';
import { VscPlayCircle } from 'react-icons/vsc';
import TrackItem from './TrackItem';
import { useDispatch, useSelector } from 'react-redux';
import { GiHeadphones } from 'react-icons/gi';
import { useEffect } from 'react';
import { playTrack } from '../store/actions/mediaAction';

const Tracks = () => {
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) window.location.href = '/home';
	}, []);
	const data = useSelector(
		(state) => state.media.currentPlayList.data,
	);
	const info = useSelector(
		(state) => state.media.currentPlayList.info,
	);
	const playlistInfo = useSelector(
		(state) => state.media.currentPlayList.info,
	);

	return (
		<div className='w-100'>
			<div className='head-tracks w-100'>
				<div className=' m-5 d-inline-flex  align-items-center'>
					<div className=' me-4'>
						<p className='h4 fw-normal'>{info?.type.toUpperCase()}</p>
						<p className='h2 fs-3 fw-bold'>{info?.nom}</p>
						<p className='description fw-light'>
							{info?.description.substring(0, 150)}{' '}
							<span className=' fw-semibold'>
								{info?.nmbrTracs}Song{info?.nmbrTracs > 1 ? 's' : ''}
							</span>
						</p>
					</div>
					<VscPlayCircle
						onClick={() =>
							dispatch(
								playTrack({
									id: playlistInfo.id,
									type: playlistInfo.type,
								}),
							)
						}
						size={40}
					/>
				</div>
			</div>
			<div className='scroll-y tracks'>
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
											id={item?.track?.id ? item?.track?.id : item.id}
											img={item?.track?.album?.images[0]?.url}
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
