import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logo.png'
import '../css/Footer.css'

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerLinks">
                <Link to={`/`}>Home</Link>
                <Link to={`/News`}>Top Headlines</Link>
                <Link to={`/Exchanges`}>Exchanges</Link>
                <a target="__blank" href="https://www.bonfire.com/store/the-crypto-merch-store/">Shop</a>
            </div>
            <div className="copyRight"><p>&copy; Copyright CryptoMonitor.com Design by Dev-Davey: Api Info Provided by <a href="coingecko.com">CoinGecko</a></p></div>
            <div className="footerLogo">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}
