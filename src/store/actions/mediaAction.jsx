/** @format */

import mediatypes from '../types/mediaType';
import axios from 'axios';
export const getHomePlaylists = (token) => {
	return (dispatch) => {
		const qery = [
			'R&B',
			'Rap',
			'Hip-Hop',
			'Jazz',
			'Classic',
			'Nouveautés',
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
						payload: { data: response.data.playlists, nom: qery[i] },
					});
				});
		}
	};
};
