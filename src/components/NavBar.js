import React, {useState} from 'react'
import '../css/navbar.css'

import {Link} from 'react-router-dom';
import menu from '../img/menu.png'
import logo from '../img/logo.png'

export default function NavBar() {
    
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="NavBar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to={`/`}>Home</Link>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                </div>
                <img className="menu" alt="menu icon" src={menu} onClick={()=> setShowLinks(!showLinks)}/>
                </div>
                
            <div className="rightSide">
                <img className="logo" src={logo} alt="logo"/>
            </div>
        </div>
    )
}
