import { Button, Container } from "react-bootstrap";
import './landingPage.css'


const LandingPage = () => {
    return(
        <>
        <div className="main">
            
        </div>
        <Container>
            <div className="introDiv">                
                <h1 id="hello-text">Start storing your notes in NoteApp!</h1>
                <div className="buttonContainer">
                    <Button onClick={()=>usrAction(true)} className="btnStart" size="lg">Login</Button>
                    <Button onClick={()=>usrAction(false)}  className="btnStart" size="lg" variant="outline-primary">SignUp</Button>
                </div>               
            </div>            
        </Container>
        </>
    );
}

function usrAction(isSignedUp){
    if(isSignedUp){
        console.log("zarejestrowany");
    } else
        console.log("niezarejestrowany");
}

export default LandingPage;