import React, { Component } from 'react';
import "./HomePage.css";
import ItemImage from './item.js'

const AssetsandISOBox = props => 
            <div className="HomePage__Assets_and_ISO_photos">
                {props.children}
            </div>

export default AssetsandISOBox;
