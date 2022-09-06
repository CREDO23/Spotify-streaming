/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

const PlayedItem = () => {
	const currentPlayed = useSelector(
		(state) => state.media.currentPlayed,
	);
	<iframe
		style='border-radius:0px'
		src='https://open.spotify.com/embed/playlist/37i9dQZF1E4D8opO7q1DAr?utm_source=generator'
		width='100%'
		height='380'
		frameBorder='0'
		allowfullscreen=''
		allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>;
	return (
		<iframe
			src={`https://open.spotify.com/embed/${
				currentPlayed.type || 'playlist'
			}/${
				currentPlayed.id || '37i9dQZF1E4D8opO7q1DAr'
			}?utm_source=generator`}
			width='100%'
			height='80'
			frameBorder='0'
			allowfullscreen=''
			allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>
	);
};

export default PlayedItem;
