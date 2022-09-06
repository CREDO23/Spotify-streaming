/** @format */
import { tokentypes } from '../types/tokenTypes';
import { Buffer } from 'buffer';

export const refreshToken = () => {
	return (dispatch) => {
		const clientId = '66c552752212464f808570991ebe2a9a';
		const clientSecret = '77ecc13970fb4395866f69eebd6bb499';
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
