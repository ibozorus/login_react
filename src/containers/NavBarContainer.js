import React from 'react';
import NavBar from '../containers/NavBar.js'
export default class NavBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleActive = this.handleActive.bind(this);
    }

    handleActive(e) {
        Array.from(document.getElementsByClassName('navbar-item')).map((element) => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');
    }
    render() {
        return (
            <>
               <NavBar handleActive={this.handleActive} />
            </>
        );
    }
}
