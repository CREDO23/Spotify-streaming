/** @format */
import axios from 'axios';
import { usertypes } from '../types/userTypes';
export const setUserInfo = () => {
	return (dispactch) => {
		const hash = window.location.hash;
		const token = hash.substring(1).split('&')[0].split('=')[1];
		try {
			axios({
				method: 'GET',
				url: 'https://api.spotify.com/v1/me',
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}).then((response) => {
				let user = {
					name: response.data.display_name,
					email: response.data.email,
					url: response.data.images[0].url,
				};
				dispactch({ type: usertypes.SET_USER_INFO, payload: user });
			});
		} catch (error) {
			console.log(error);
		}
	};
};
