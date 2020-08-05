import React, { Component } from 'react';

//stteless functional component - pravimo je kao funkciju a ne kao klasu, nema stanje

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                    <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
        </nav>
    );
}

export default NavBar;