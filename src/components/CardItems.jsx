/** @format */

import React from 'react';
import { Container } from 'react-bootstrap';
import ItemCard from './ItemCard';

const CardsItem = ({ nom, items }) => {
	return (
		<Container className=''>
			<div>
				<p className='h2  m-3'>{nom}</p>
			</div>
			<div className='d-flex  flex-wrap '>
				{items &&
					items.map((elmnt) => (
						<ItemCard
							description={elmnt.description}
							urlImg={elmnt.images[0].url}
							nom={elmnt.name}
						/>
					))}
			</div>
		</Container>
	);
};

export default CardsItem;
