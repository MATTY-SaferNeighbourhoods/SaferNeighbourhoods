import React, { Component } from 'react';
import './App.css';
import MapComponent from './pages/Discussions/MapComponent.jsx';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UserProfile from './pages/UserProfile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/discussions" component={MapComponent} />
        <Route exact path="/userprofile" component={UserProfile} />
      </Switch>
      <Footer />
      </div>
      </Router>
      </div>
  );
  }
}

export default App;
