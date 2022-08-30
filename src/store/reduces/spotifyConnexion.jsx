/** @format */

import tokenTypes from '../types/userTypes';
import initialState from '../initialState';

const spotifyConnexion = (state = initialState.token, action) => {
	let newState = { ...state };

	switch (action.type) {
		case tokenTypes.SET_ACCESS_tOKEN:
			newState.token = action.payload;
		default:
			return newState;
	}
};

export default spotifyConnexion;
