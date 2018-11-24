import React, { Component } from 'react';
import "./HomePage.css";

class Header extends Component {
    render () {
        return (
            <div className="HomePage__Assets_and_ISO_box" style={{backgroundColor:this.props.backgroundColor}}>
            <div className="HomePage__Assets_and_ISO_heading h5">
                {this.props.name}
            </div>
            <div className="HomePage__Assets_and_ISO_photos">
                <img className="img-fluid" src='http://via.placeholder.com/90x90'></img>
                <img className="img-fluid" src='http://via.placeholder.com/90x90'></img>
                <img className="img-fluid" src='http://via.placeholder.com/90x90'></img>
            </div>
            </div>

        )
    }
}

export default Header;