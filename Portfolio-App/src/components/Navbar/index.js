import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="col-md-9">
                <a className="navbar-brand" href="#" style="background-color: rgb(48, 87, 55);">Ian Wren</a>
                <button className="navbar-toggler  float-right" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-md-3">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/index" className={window.location.pathname === "/index" ? "nav-link active" : "nav-link"}>Home</Link>
                        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                        <Link to="#" className="nav-link" tabindex="3" aria-disabled="true"> </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
