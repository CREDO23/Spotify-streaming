/** @format */
import axios from 'axios';
import { usertypes } from '../types/userTypes';
export const setUserInfo = (token) => {
	return (dispactch) => {
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
