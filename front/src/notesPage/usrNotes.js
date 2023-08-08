import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddNoteScr from "../components/addNoteScr";
import Note from "../components/note"
import '../components/addNoteScr.css'

const UsrNotes = () => {
    const navigate = useNavigate();
    
    const addNoteFunc = () => {
        navigate('/addNote');
    }

    return(
        <AddNoteScr title="Hi! It's your notes">
        <div id="btnCreateDiv" style={{margin: "30px 0 35px 0"}}>
        <Button id="btnCreate" onClick={()=>addNoteFunc()} size="lg">Create new note</Button>
        </div>
        <div className="noteDiv">
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
        </div>
        </AddNoteScr>
    );
}


export default UsrNotes;