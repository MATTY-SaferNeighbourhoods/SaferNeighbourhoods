import React from 'react';
// import { NavLink, Link } from "react-router-dom";
import './Footer.css';

class Footer extends React.Component {
    render(){
    return(
        <div>
        <div className="phantom" />
        <div className="footer">
        <div className="row">
        <div className="col footer__icon__left">
            <i class="fas fa-home"></i>
        </div>
        <div className="col footer__icon__middle">
            <i class="fas fa-exclamation-circle"></i> 
        </div>
        <div className="col footer__icon__right">
            <i class="fas fa-user"></i>
        </div> 
        </div>
        </div>
        </div>
    )

    }
}
export default Footer;