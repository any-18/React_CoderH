import { Card } from "react-bootstrap";

const Item = ({ item }) => {

    return (
        <div>
            <Card border="secondary" className="h-100">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Img variant="top" src={item.imagesUrl} />
                    <Card.Text>
                        {item.text}
                    </Card.Text>
                </Card.Body>
                <div className="m-4">
                    <Card.Text><strong>{item.price}</strong></Card.Text>
                </div>
            </Card>
        </div>
    );
}

export default Item;