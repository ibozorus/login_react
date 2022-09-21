import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons"
import { Link, Outlet  } from "react-router-dom";

export default class NavBar extends React.Component {
    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home Page</Link>
                <Link className="btn btn-primary" to="/login"><FontAwesomeIcon icon={faRightToBracket} />Login</Link>
            </nav>
            <Outlet />
            </>
        );
    }
}
