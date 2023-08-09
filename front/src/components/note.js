import { Button, Card, Accordion } from "react-bootstrap";
import './addNoteScr.css'


const Note = ({noteHeader, cardTitle, cardText}) => {
    
    const deleteNote = () => {
        if(window.confirm("Are yoe sure to delete this note?")){
            console.log("deleting");
        }
    }

    return(
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Card border="primary" style={{ width: '18rem'}}>
                    <Accordion.Header>
                        <Card.Header>{noteHeader}</Card.Header>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card.Body>
                            <Card.Title>{cardTitle}</Card.Title>
                            <Card.Text>{cardText}</Card.Text>
                            <div style={{marginTop:"30px"}}>
                                <Button className="noteActBtn">Edit</Button>
                                <Button className="noteActBtn" onClick={() => deleteNote()}>Delete</Button>
                            </div>
                        </Card.Body>
                    </Accordion.Body>
                </Card>
            </Accordion.Item>
        </Accordion>
    );
}

export default Note;