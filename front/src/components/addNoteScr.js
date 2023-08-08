import { Container, Row } from "react-bootstrap";
import './addNoteScr.css'

const AddNoteScr = ({title, children}) => {
    return(
        <Container>
            <Row>
                <div className="page">
                    {
                      title && <>
                        <h1 id="heading">{title}</h1>
                        <hr />
                      </>
                    }
                    {children}
                </div>
            </Row>
        </Container>
    );
}

export default AddNoteScr;