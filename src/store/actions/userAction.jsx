/** @format */
import { usertypes } from '../types/userTypes';
export const setUserInfo = (user) => {
	return (dispactch) => {
		dispactch({ type: usertypes.SET_USER_INFO, payload: user });
	};
};
