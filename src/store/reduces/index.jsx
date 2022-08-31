/** @format */

import { combineReducers } from 'redux';
import spotifyConnexion from './spotifyConnexionReducer';
import { userReducer } from './userReducer';
import { mediaReducer } from './mediaReducer';

export default combineReducers({
	token: spotifyConnexion,
	user: userReducer,
	media: mediaReducer,
});
