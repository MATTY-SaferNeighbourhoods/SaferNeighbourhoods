import React, { Component } from 'react';
import Header from '../../components/Header/header.js';
import MapComponent from './MapComponent.jsx';
import './DiscussionPage.css'

class DiscussionPage extends Component {
    render() {
      return (
        <div> 
            <Header headerName="Discussion" />
            <MapComponent />
        </div>
      );
    }
  }
  
  export default DiscussionPage;
  