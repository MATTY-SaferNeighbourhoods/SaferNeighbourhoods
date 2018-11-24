import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <div >
        <HomePage />
        <Footer />
      </div>
  );
  }
}

export default App;
