/** @format */

import initialState from '../initialState';
import mediatypes from '../types/mediaType';

export const mediaReducer = (state = initialState.media, action) => {
	let newState = { ...state };
	switch (action.type) {
		case mediatypes.GET_HOME_PAGE_PLAYLISTS:
			newState.homePlayList.push(action.payload);
			return newState;
		case mediatypes.SET_CURRENT_PLAYLIST:
			newState.currentPlayList = action.payload;
			return newState;
		default:
			return newState;
	}
};
