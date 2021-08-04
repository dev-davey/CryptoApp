import React, {useState} from 'react'
import '../css/navbar.css'

import {Link} from 'react-router-dom';
import logo from '../img/logo.png'
import menu from '../img/menu.png'


export default function NavBar() {
    
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="NavBar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to={`/`}>Home</Link>
                <Link to={`/News`}>Top Headlines</Link>
                <Link to={`/Exchanges`}>Exchanges</Link>
                <a target="__blank" href="https://www.bonfire.com/store/the-crypto-merch-store/">Shop</a>
                </div>
                <img className="menu" alt="menu icon" src={menu} onClick={()=> setShowLinks(!showLinks)}/>
                </div>
                
            <div className="rightSide">
                <img className="logo" src={logo} alt="logo"/>
            </div>
        </div>
    )
}
