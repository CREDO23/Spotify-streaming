/** @format */

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../store/actions/mediaAction';
import TrackItem from './TrackItem';
import CardsItem from './CardItems';
import { Table } from 'react-bootstrap';

const Search = () => {
	const token = useSelector((state) => state.token);
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const tracks = useSelector((state) => state.media.search.tracks);
	const albums = useSelector((state) => state.media.search.albums);
	const playlists = useSelector(
		(state) => state.media.search.playlists,
	);
	useEffect(() => {
		console.log('home');
		if (!token) {
			window.location.href = '/';
		}
	}, []);

	return (
		<div className='scroll-y'>
			<div className=' d-flex align-items-center justify-content-center'>
				<input
					value={query}
					class='form-control w-50 m-2 '
					type='search'
					placeholder='Artist , track , album'
					aria-label='default input example'
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					type='button'
					onClick={() => dispatch(search(query, token))}
					class='btn btn-primary'>
					Search
				</button>
			</div>
			{(tracks || albums || playlists) && (
				<div>
					<div className='scroll-y row'>
						<Table hover>
							<thead>
								<tr>
									<th className='h2  m-3'>Tracks</th>
								</tr>
							</thead>
							<tbody>
								{tracks?.tracks?.items?.map((item, index) => {
									return (
										<tr index={index}>
											<td>
												<TrackItem
													img={item?.album?.images[0].url}
													time={item?.duration_ms}
													name={item?.name}
													albumName={item?.album?.name}
													preview={item?.preview_url}
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</div>
					<div className='row'>
						<CardsItem items={albums?.albums?.items} nom='Album' />
					</div>
					<div className='row'>
						<CardsItem
							items={playlists?.playlists?.items}
							nom='PlayList'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
