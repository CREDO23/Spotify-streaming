/** @format */

import mediatypes from '../types/mediaType';
import axios from 'axios';
export const getHomePlaylists = (token) => {
	return (dispatch) => {
		const qery = [
			'r&b',
			'rap',
			'hiphop',
			'jazz',
			'classic',
			'nouveate',
		];
		for (let i = 0; i < qery.length; i++) {
			if (token)
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
						payload: response,
					});
				});
		}
	};
};
