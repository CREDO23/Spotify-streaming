/** @format */
import React from 'react';
import axios from 'axios';
import Baniere from './Baniere';
import Head from './Head';
import CardsItem from './CardItems';
import { useSelector, useDispatch } from 'react-redux';
import { getHomePlaylists } from '../store/actions/mediaAction';
import { setUserInfo } from '../store/actions/userAction';
import { useEffect } from 'react';
import { refreshToken } from '../store/actions/spotifyConnexionAction';

const Main = () => {
	const dispatch = useDispatch();
	const collection = useSelector((state) => state.media);

	useEffect(() => {
		{
			dispatch(getHomePlaylists());
			dispatch(setUserInfo());
			dispatch(refreshToken());
		}
	}, []);

	return (
		<div className=' w-100'>
			<div>
				<Head />
			</div>
			<div className='w-100 d-flex'>
				<div className='scroll-y w-75'>
					{collection &&
						collection.homePlayList.map((elmt, index) => {
							return (
								<CardsItem
									key={index}
									items={elmt.data.items}
									nom={elmt.nom}
								/>
							);
						})}
				</div>
				<div className=' w-25'>
					<p className='h5 text-center  fw-semi-bold   m-3'>
						Recently Played
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
