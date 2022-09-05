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
	},
};

export default initialState;
