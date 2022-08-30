/** @format */

import { combineReducers } from 'redux';
import spotifyConnexion from './spotifyConnexionReducer';
import { userReducer } from './userReducer';

export default combineReducers({
	token: spotifyConnexion,
	user: userReducer,
});
