import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
    render () {
        return (
            <div className="header h3">
                {this.props.headerName}
            </div>

        )
    }
}

export default Header;