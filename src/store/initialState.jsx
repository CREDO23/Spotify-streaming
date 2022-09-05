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
			info: {
				played: false,
			},
		},
		search: {
			albums: null,
			playlists: null,
			tracks: null,
		},
	},
};

export default initialState;
