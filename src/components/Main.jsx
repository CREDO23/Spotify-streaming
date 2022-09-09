/** @format */
import React from 'react';

import Head from './Head';
import CardsItem from './CardItems';
import { useSelector, useDispatch } from 'react-redux';
import { getHomePlaylists } from '../store/actions/mediaAction';
import { useEffect } from 'react';
import { refreshToken } from '../store/actions/spotifyConnexionAction';

const Main = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const collection = useSelector((state) => state.media.homePlayList);

	useEffect(() => {
		{
			dispatch(refreshToken());
			dispatch(getHomePlaylists(token));
		}
	}, []);

	return (
		<div className=' w-100'>
			<div>
				<Head />
			</div>
			<div className='w-100 d-flex'>
				<div className='scroll-y main '>
					{collection &&
						collection.map((elmt, index) => {
							return (
								<CardsItem
									key={index}
									items={elmt.data.items}
									nom={elmt.nom}
								/>
							);
						})}
				</div>
				<div className='recent w-25'>
					<p className='h5 text-center  fw-semi-bold   m-3'>
						Recently Played
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
