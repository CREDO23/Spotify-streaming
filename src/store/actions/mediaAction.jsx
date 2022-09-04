/** @format */

import mediatypes from '../types/mediaType';
import axios from 'axios';
export const getHomePlaylists = () => {
	return (dispatch) => {
		const qery = [
			'R&B',
			'Rap',
			'Hip-Hop',
			'Jazz',
			'Classic',
			'Nouveautés',
		];
		const hash = window.location.hash;
		const token = hash.substring(1).split('&')[0].split('=')[1];
		for (let i = 0; i < qery.length; i++) {
			axios({
				method: 'GET',
				url: `https://api.spotify.com/v1/search?q=${qery[i]}&type=playlist`,
				headers: {
					Authorization: 'Bearer ' + token,
					'Content-Type': 'application/json',
				},
			}).then((response) => {
				dispatch({
					type: mediatypes.GET_HOME_PAGE_PLAYLISTS,
					payload: { data: response.data.playlists, nom: qery[i] },
				});
			});
		}
	};
};

export const setCurrentPlayList = (token, url, itemInfo) => {
	const info = itemInfo;
	return (dispatch) => {
		axios({
			method: 'GET',
			url: `${url}`,
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
			},
		}).then((response) => {
			dispatch({
				type: mediatypes.SET_CURRENT_PLAYLIST,
				payload: { data: response.data, info },
			});
		});
	};
};

const playTrack = (item) => {
	const url = item;
	const track = new Audio(url);
	track.play();
	return (dispatch) => {
		dispatch({ type: mediatypes.PLAY, payload: item });
	};
};
