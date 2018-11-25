import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './Footer.css';

class Footer extends React.Component {
    render(){
    return(
        <div>
        <div className="phantom" />
        <div className="footer">
        <div className="row">
        <div className="col footer__icon__home">
        <Link to="/">
            <i class="fas fa-home"></i>
        </Link>
        </div>
        <div className="col footer__icon__alerts">
        <Link to="/discussions">
            <i class="fas fa-exclamation-circle"></i> 
        </Link>
        </div>
        <div className="col footer__icon__profile">
        <Link to="/userprofile">
            <i class="fas fa-user"></i>
        </Link>
        </div> 
        </div>
        </div>
        </div>
    )

    }
}
export default Footer;