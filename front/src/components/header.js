//import { Button, Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return(
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand ms-4" href="/">NoteApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <Nav className="m-auto">
                  <form className="d-flex">
                      <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </Nav>

                <ul className="navbar-nav me-4">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">My notes
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    
                <Nav>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">My profile</NavDropdown.Item>
                        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav> 
                    
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header