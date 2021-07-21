import React, {useState} from 'react'
import '../css/navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom';

export default function NavBar() {
    
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="NavBar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to={`/`}><a href="#">Home</a></Link>
                <a href="#">Crypto-Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}><AiOutlineMenu/></button>
            </div>
                
            <div className="rightSide">
            <input type="text" placeholder="Seach Coin"/>
                <button>Search</button>
                </div>
            </div>
    )
}
