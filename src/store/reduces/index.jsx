/** @format */

import { combineReducers } from 'redux';
import spotifyConnexion from './spotifyConnexion';

export default combineReducers({
	token: spotifyConnexion,
});
