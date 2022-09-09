/** @format */
import Card from 'react-bootstrap/Card';
import { VscPlayCircle } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {
	playTrack,
	setCurrentPlayList,
} from '../store/actions/mediaAction';

function ItemCard({
	urlImg,
	nmbrTracs,
	type,
	description,
	nom,
	urlTracks,
	id,
}) {
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();

	const itemInfo = {
		nom,
		nmbrTracs,
		type,
		description,
		id,
	};

	return (
		<Card
			onClick={() => {
				dispatch(setCurrentPlayList(token, urlTracks, itemInfo));
			}}
			className=' card mx-2 my-1'
			style={{ width: '200px' }}>
			<Card.Img
				variant='top'
				style={{ height: '200px' }}
				src={urlImg}
				alt={nom.substring(0, 5)}
			/>
			<Card.Body>
				<div className='row '>
					<div className='col-3 '>
						<VscPlayCircle
							onClick={() => dispatch(playTrack({ id, type }))}
							size={30}
						/>
					</div>
					<div className='col-9 d-flex align-items-center'>
						<p>{nom.substring(0, 12)}.</p>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default ItemCard;
