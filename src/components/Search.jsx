/** @format */

import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../store/actions/mediaAction';

const Search = () => {
	const token = useSelector((state) => state.token);
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	return (
		<div>
			<div className=' d-flex align-items-center justify-content-center'>
				<input
					value={query}
					class='form-control w-50 m-2 '
					type='search'
					placeholder='Artist , track , album'
					aria-label='default input example'
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					type='button'
					onClick={() => dispatch(search(query, token))}
					class='btn btn-primary'>
					Search
				</button>
			</div>
		</div>
	);
};

export default Search;
