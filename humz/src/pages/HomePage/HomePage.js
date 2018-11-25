import React, { Component } from 'react';
import Header from '../../components/Header/header.js';
import AssetsandISO from './AssetsandISO.js';
import AssetsandISObox from './AssetsandISObox.js';
import ItemImage from './item.js';

class HomePage extends Component {
  render() {
    return (
      <div> 
        <Header headerName="MATTY Community"/>
        <div class="HomePage__mainbody">
        <AssetsandISO name="Assets">
          <AssetsandISObox>
            <ItemImage src="https://i.pinimg.com/originals/8e/bb/c4/8ebbc4fcd99fb30c77ac1a550d09840f.jpg" />
          </AssetsandISObox>
        </AssetsandISO>
        <AssetsandISO name="ISO">
          <AssetsandISObox>
              
          </AssetsandISObox>
        </AssetsandISO>
        </div>
      </div>
    );
  }
}

export default HomePage;
