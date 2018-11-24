import React, { Component } from 'react';
// import Card from "./footer"
// import Button from "./item"
// import API from "../../utils/API";
// import { connect } from 'react-redux';
import Header from './header.js';
import AssetsandISO from './AssetsandISO.js';

class HomePage extends Component {
  render() {
    return (
      <div> 
        <Header />
        <div class="HomePage__mainbody">
        <AssetsandISO 
        name="Assets"
        backgroundColor="white" />
        <AssetsandISO 
        name="ISO" 
        backgroundColor="white" />
        </div>
      </div>
    );
  }
}

export default HomePage;
