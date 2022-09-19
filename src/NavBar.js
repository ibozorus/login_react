import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons"

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Login Page</a>
                <a className="btn btn-primary"><FontAwesomeIcon icon={faRightToBracket} />Login</a>
            </nav>
        );
    }
}
