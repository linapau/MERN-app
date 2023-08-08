import { Card } from "react-bootstrap";


const Note = ({noteHeader, cardTitle, cardText}) => {
    return(
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>{noteHeader}</Card.Header>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardText}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Note;