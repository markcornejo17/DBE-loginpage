import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="navbar">
        <div className="container-fluid">
            <img src="./dolphin-logo.jpeg" alt="logo" className="logo"/>
            <a className="navbar-brand" href="#">Blue Dolphin Engagement</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
    </nav>
    )
}

export default Navbar;
