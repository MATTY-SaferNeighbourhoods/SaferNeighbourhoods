import React, { Component } from 'react';
import MatyProfile from './MatyProfile.png';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    return (
      <div className="pictureBox"> 
        <img className="user_profile" src={MatyProfile}></img>
      </div>
    );
  }
}

export default UserProfile;
