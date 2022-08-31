/** @format */
import { tokentypes } from '../types/tokenTypes';
export const getAccess = () => {
	const clientId = '66c552752212464f808570991ebe2a9a';
	const redirectUrl = 'http://localhost:5173/home';
	const scope = 'user-read-private user-read-email';
	window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=token&show_daialog=true`;
};

export const getToken = () => {
	return (dispatch) => {
		const hash = window.location.hash;
		const token = hash.substring(1).split('&')[0].split('=')[1];
		dispatch({
			type: tokentypes.SET_ACCESS_TOKEN,
			payload: token || null,
		});
	};
};
