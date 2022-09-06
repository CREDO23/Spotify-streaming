/** @format */

import React from 'react';
import { Container } from 'react-bootstrap';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshToken } from '../store/actions/spotifyConnexionAction';

const CardsItem = ({ nom, items }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshToken());
	}, []);
	return (
		<Container className=''>
			<div>
				<p className='h2  m-3'>{nom}</p>
			</div>
			<div className='d-flex scroll-x  '>
				{items?.map((elmnt, index) => (
					<Link to='/home/tracks'>
						<ItemCard
							key={index}
							description={
								elmnt?.description ? elmnt?.description : ''
							}
							urlImg={elmnt.images[0].url}
							nom={elmnt.name}
							id={elmnt.id}
							urlTracks={
								elmnt?.tracks?.href
									? elmnt.tracks.href
									: elmnt.href + '/tracks'
							}
							type={elmnt.type}
							nmbrTracs={
								elmnt?.tracks?.total
									? elmnt?.tracks?.total
									: elmnt.total_tracks
							}
						/>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default CardsItem;
