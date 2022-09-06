/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

const PlayedItem = () => {
	const currentPlayed = useSelector(
		(state) => state.media.currentPlayed,
	);

	return (
		currentPlayed.id && (
			<iframe
				src={`https://open.spotify.com/embed/${currentPlayed.type}/${currentPlayed.id}?utm_source=generator`}
				width='100%'
				height='80'
				frameBorder='0'
				allowfullscreen=''
				allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>
		)
	);
};

export default PlayedItem;
