/** @format */

import React from 'react';
import { BiHomeCircle, BiSearch, BiLibrary } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';

const Sidebar = () => {
	const firstPart = [
		{
			icon: <BiHomeCircle size={24} />,
			label: 'Home',
		},
		{
			icon: <BiSearch size={24} />,
			label: 'Search',
		},
		{
			icon: <BiLibrary size={24} />,
			label: 'Your Library',
		},
	];
	const secondtPart = [
		{
			icon: <AiOutlinePlusCircle className='icon' size={24} />,
			label: 'Add a PlayList',
		},
		{
			icon: <MdFavoriteBorder size={24} />,
			label: 'Liked Songs',
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
						<li className=' m-2' key={index}>
							{item.icon}
							<p className='h6 fw-normal ms-2  d-inline'>
								{item.label}
							</p>
						</li>
					);
				})}
			</ul>
			<ul className=' ps-2'>
				{secondtPart.map((item, index) => {
					return (
						<li className=' m-2' key={index}>
							{item.icon}
							<p className='h6 fw-normal ms-2  d-inline'>
								{item.label}
							</p>
						</li>
					);
				})}
			</ul>
			<div className='divider w-75 ms-4'></div>
		</>
	);
};

export default Sidebar;
