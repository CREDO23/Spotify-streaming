/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeCircle, BiSearch, BiLibrary } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';

const Sidebar = () => {
	const firstPart = [
		{
			icon: <BiHomeCircle size={24} />,
			label: 'Home',
			path: '/home',
		},
		{
			icon: <BiSearch size={24} />,
			label: 'Search',
			path: '/home/search',
		},
		{
			icon: <BiLibrary size={24} />,
			label: 'Your Library',
			path: '/',
		},
	];
	const secondtPart = [
		{
			icon: <AiOutlinePlusCircle className='icon' size={24} />,
			label: 'Add a PlayList',
			path: '/',
		},

		{
			icon: <MdFavoriteBorder size={24} />,
			label: 'Liked Songs',
			path: '/',
		},
	];

	return (
		<>
			<div className=''>
				<span className='sidemenu_circle d-inline-block mx-1 bg-danger'></span>
				<span className='sidemenu_circle d-inline-block mx-1 bg-warning'></span>
				<span className='sidemenu_circle d-inline-block mx-1 bg-success'></span>
			</div>
			<ul className=' my-5 ps-2'>
				{firstPart.map((item, index) => {
					return (
						<Link to={item.path}>
							<li className=' m-2' key={index}>
								{item.icon}
								<p className='h6 fw-normal ms-2  d-inline'>
									{item.label}
								</p>
							</li>
						</Link>
					);
				})}
			</ul>
			<ul className=' ps-2'>
				{secondtPart.map((item, index) => {
					return (
						<Link to={item.path}>
							<li className=' m-2' key={index}>
								{item.icon}
								<p className='h6 fw-normal ms-2  d-inline'>
									{item.label}
								</p>
							</li>
						</Link>
					);
				})}
			</ul>
		</>
	);
};

export default Sidebar;
