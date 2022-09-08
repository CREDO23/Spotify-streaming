/** @format */

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { BiHomeCircle, BiSearch, BiLibrary } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';

const Menu = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
			path: '/home/library',
		},
	];
	const secondtPart = [
		{
			icon: <AiOutlinePlusCircle className='icon' size={24} />,
			label: 'Add a PlayList',
			path: '/home/playlist',
		},

		{
			icon: <MdFavoriteBorder size={24} />,
			label: 'Liked Songs',
			path: '/home/favorites',
		},
	];

	return (
		<>
			<GiHamburgerMenu
				className='d-sm-none'
				size={30}
				onClick={handleShow}
			/>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton></Offcanvas.Header>
				<Offcanvas.Body>
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
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Menu;
