import React, { Component } from 'react';
// import Card from "./footer"
// import Button from "./item"
// import API from "../../utils/API";
// import { connect } from 'react-redux';
import Header from '../../components/Header/header.js';
import AssetsandISO from './AssetsandISO.js';

class HomePage extends Component {
  render() {
    return (
      <div> 
        <Header headerName="MATTY Community"/>
        <div class="HomePage__mainbody">
        <AssetsandISO 
        name="Assets" />
        <AssetsandISO 
        name="ISO" />
        </div>
      </div>
    );
  }
}

export default HomePage;
