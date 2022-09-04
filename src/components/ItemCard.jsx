/** @format */
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setCurrentPlayList } from '../store/actions/mediaAction';
import axios from 'axios';

function ItemCard({
	urlImg,
	nmbrTracs,
	type,
	description,
	nom,
	urlTracks,
}) {
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();

	const itemInfo = {
		nom,
		nmbrTracs,
		type,
		description,
	};

	return (
		<Card
			onClick={() => {
				dispatch(setCurrentPlayList(token, urlTracks, itemInfo));
			}}
			className='col-1 card mx-2 my-1'
			style={{ width: '200px' }}>
			<Card.Img
				variant='top'
				style={{ height: '200px' }}
				src={urlImg}
				alt={nom.substring(0, 5)}
			/>
			<Card.Body>
				<Card.Title>{nom.substring(0, 12)}.</Card.Title>
				<Card.Text>{description.substring(0, 15)}...</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ItemCard;
