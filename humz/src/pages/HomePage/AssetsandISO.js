import React, { Component } from 'react';
import "./HomePage.css";
import ItemImage from './item.js'

class Header extends Component {
    render () {
        return (
            <div className="HomePage__Assets_and_ISO_box HomePage__scrolling-wrapper-flexbox">
            <div className="HomePage__Assets_and_ISO_heading h5">
                {this.props.name}
            </div>
            </div>

        )
    }
}

export default Header;