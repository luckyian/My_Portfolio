import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navibar() {
    return (
        <Navbar expand="md" className="navitext" variant="dark" sticky="top">
            <div className="col-md-9">
                <Navbar.Brand href="#"  >Ian Wren</Navbar.Brand>
                <Navbar.Toggle  className="float-right" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation" />
            </div>
            <div className="col-md-3">
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav>
                        <Nav.Link href="#/index" >Home</Nav.Link>
                        <Nav.Link href="#/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Analytics Portfolio</Nav.Link>
                        <Nav.Link href="#/portfolio" >Dev Portfolio</Nav.Link>
                        <Nav.Link href="#" className="nav-link" tabindex="3" aria-disabled="true"> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navibar;
