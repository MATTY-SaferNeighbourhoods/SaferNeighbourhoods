import React, { Component } from 'react';
import './App.css';
import MapComponent from './pages/Discussions/MapComponent.jsx';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <div >
        <HomePage />
        <Footer />
        <MapComponent />
      </div>
  );
  }
}

export default App;
