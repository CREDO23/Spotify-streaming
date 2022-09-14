/** @format */
import { tokentypes } from '../types/tokenTypes';
import { Buffer } from 'buffer';

const clientId = import.meta.env.VITE_CLIENT_ID
const clientSecret = import.meta.env.VITE_CLIENT_SECRET

export const refreshToken = () => {
	return (dispatch) => {
		const key = Buffer.from(clientId + ':' + clientSecret);
		fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${key.toString('base64')}`,
			},
			body: new URLSearchParams({
				grant_type: 'client_credentials',
			}).toString(),
		})
			.then((res) => res.json())
			.then((res) => {
				dispatch({
					type: tokentypes.REFRESH_TOKEN,
					payload: res.access_token,
				});
			});
	};
};
