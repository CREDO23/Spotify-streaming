/** @format */

import initialState from '../initialState';
import { usertypes } from '../types/userTypes';

export const userReducer = (
	state = initialState.currentUser,
	action,
) => {
	let newState = { ...state };
	switch (action.type) {
		case usertypes.SET_USER_INFO:
			// console.log(action.payload);
			newState = action.payload;
			return newState;
		default:
			return newState;
	}
};
