import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="col-md-9">
                <Navbar.Brand href="#" style="background-color: rgb(48, 87, 55);">Ian Wren</Navbar.Brand>
                <Navbar.Toggle  className="float-right" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation" />
            </div>
            <div className="col-md-3">
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav>
                        <Nav.Link to="/index" className={window.location.pathname === "/index" ? "nav-link active" : "nav-link"}>Home</Link>
                        {/* <Nav.Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link> */}
                        <Nav.Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                        <Nav.Link to="#" className="nav-link" tabindex="3" aria-disabled="true"> </Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navbar;
