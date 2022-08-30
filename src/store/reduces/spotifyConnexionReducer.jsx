/** @format */

import { tokentypes } from '../types/tokenTypes';
import initialState from '../initialState';

const spotifyConnexion = (state = initialState.token, action) => {
	let newState = { ...state };

	switch (action.type) {
		case tokentypes.SET_ACCESS_TOKEN:
			newState = action.payload;
			return newState;
		default:
			return newState;
	}
};

export default spotifyConnexion;
