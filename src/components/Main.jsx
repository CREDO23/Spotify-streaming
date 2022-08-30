/** @format */
import React from 'react';
import Baniere from './Baniere';
import Head from './Head';
import { useEffect } from 'react';
import axios from 'axios';

const Main = () => {
	// useEffect(() => {
	// 	const hash = window.location.hash;
	// 	const token = hash.substring(1).split('&')[0].split('=')[1];
	// 	if (token) {
	// 		axios({
	// 			method: 'GET',
	// 			url: 'https://api.spotify.com/v1/me',
	// 			headers: {
	// 				Authorization: 'Bearer ' + token,
	// 			},
	// 		}).then((res) => {
	// 			console.log(res);
	// 		});
	// 	}
	// }, []);

	return (
		<>
			<Head />
			<Baniere />
		</>
	);
};

export default Main;
