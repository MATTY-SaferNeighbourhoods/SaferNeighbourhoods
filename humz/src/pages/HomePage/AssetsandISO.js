import React, { Component } from 'react';
import "./HomePage.css";

class Header extends Component {
    render (props) {
        return (
            <div className="HomePage__Assets_and_ISO_box HomePage__scrolling-wrapper-flexbox">
            <div className="HomePage__Assets_and_ISO_heading h5">
                {this.props.name}
            </div>
            <div className="HomePage__Assets_and_ISO_photos">
            <div>
                <img className="HomePage__card_image" src={this.props.srcOne}></img>
            </div>
            <div>
                <img className="HomePage__card_image" src={this.props.srcTwo}></img>
            </div>
            <div>
                <img className="HomePage__card_image" src={this.props.srcThree}></img>
            </div>
            </div>
            </div>

        )
    }
}

export default Header;