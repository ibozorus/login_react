import React from 'react';

export default class Foto extends React.Component {




    render() {
        return(<div className="photo-entry-block">
            <a href="../images/berlin.jpg">
                <img className="photo-img" src="../images/berlin.jpg"
                    alt="../images/berlin.jpg"/>
            </a>
            <h5>The Heart of Europe</h5>
            <h6>Berlin, Germany</h6>
        </div>)
    }
}
