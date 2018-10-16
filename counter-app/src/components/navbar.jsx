import React, { Component } from "react";

//stateless functional component - since this class has a single method, no event handler or helper methods to calculate values and no state either, in this situation we can convert this to a stateless functional component. In functional components you have to manually pass in the props parameter
const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;
