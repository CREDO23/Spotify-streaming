/** @format */
import Card from 'react-bootstrap/Card';

function ItemCard({ urlImg, description, nom }) {
	return (
		<Card className='col-1 card mx-2 my-1' style={{ width: '200px' }}>
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
