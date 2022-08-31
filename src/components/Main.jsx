/** @format */
import React from 'react';
import Baniere from './Baniere';
import Head from './Head';
import { useSelector, useDispatch } from 'react-redux';
import { getHomePlaylists } from '../store/actions/mediaAction';
import { setUserInfo } from '../store/actions/userAction';
import { useEffect } from 'react';

const Main = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	useEffect(() => {
		dispatch(getHomePlaylists(token));
		dispatch(setUserInfo(token));
	}, []);

	return (
		<>
			<Head />
			<Baniere />
		</>
	);
};

export default Main;
