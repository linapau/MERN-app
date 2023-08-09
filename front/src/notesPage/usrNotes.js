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
            <Note className="notes" noteHeader={"It's cold outside"} cardTitle={"Wild weather"} cardText={"August in Poland is the coldest August in my whole life so far. Today it was 8 degrees celsius! It's raining all days. And in a few days it will be 25 degrees. There are amazing temperature jumps here."} />
            <Note className="notes" noteHeader={"Buy a luggage"} cardTitle={"Remember!"} cardText={"You must buy additional luggage to your flight."} />
            <Note className="notes" noteHeader={"Long Note"} cardTitle={"Cheers :)"} cardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"czy to zle nwm"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
            <Note className="notes" noteHeader={"Hi"} cardTitle={"tytul"} cardText={"tutaj bedzie tekst notatki"} />
        </div>
        </AddNoteScr>
    );
}


export default UsrNotes;