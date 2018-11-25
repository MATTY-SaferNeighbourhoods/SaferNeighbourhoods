import React, { Component } from 'react';
import "./HomePage.css";

class ItemImage extends Component {
    render () {
        return (
            <div>
                <img className="HomePage__card_image" src={this.props.src}></img>
            </div>
        )
    }
}

export default ItemImage;