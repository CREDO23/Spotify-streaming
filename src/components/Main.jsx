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

const Main = () => {
	const dispatch = useDispatch();
	const collection = useSelector((state) => state.media);

	useEffect(() => {
		{
			dispatch(getHomePlaylists());
			dispatch(setUserInfo());
		}
	}, []);

	return (
		<div className=' w-100'>
			<div>
				<Head />
			</div>
			<div>
				<Baniere />
			</div>
			<div className='w-100 d-flex'>
				<div className=' w-75'>
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
					<p className='h3 fs-4 text-center  fw-normal  m-3'>
						Recently Played
					</p>
					<div className=' w-100 border border-opacity-10 rounded-1 border-dark'></div>
				</div>
			</div>
		</div>
	);
};

export default Main;
