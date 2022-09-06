/** @format */

const initialState = {
	token: '',
	currentUser: null,
	media: {
		homePlayList: [],
		currentPlayList: {
			data: null,
			info: null,
		},
		currentTrack: {
			data: null,
		},
		search: {
			albums: null,
			playlists: null,
			tracks: null,
		},
		currentPlayed: {},
	},
};

export default initialState;
