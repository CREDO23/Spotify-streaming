/** @format */

import React from 'react';
import { Container } from 'react-bootstrap';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';

const CardsItem = ({ nom, items }) => {
	return (
		<Container className=''>
			<div>
				<p className='h2  m-3'>{nom}</p>
			</div>
			<div className='d-flex  flex-wrap '>
				{items.map((elmnt, index) => (
					<Link to='/home/tracks'>
						<ItemCard
							key={index}
							description={elmnt.description}
							urlImg={elmnt.images[0].url}
							nom={elmnt.name}
							urlTracks={elmnt.tracks.href}
							type={elmnt.type}
							nmbrTracs={elmnt.tracks.total}
						/>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default CardsItem;
