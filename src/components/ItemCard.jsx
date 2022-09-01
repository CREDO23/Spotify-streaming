/** @format */
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux/es/exports';
import axios from 'axios';

function ItemCard({ urlImg, description, nom, urlTracks }) {
	const token = useSelector((state) => state.token);
	const get = () => {
		try {
			axios({
				method: 'GET',
				url: `${urlTracks}`,
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}).then((response) => {
				console.log(response);
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Card
			onClick={() => get()}
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
