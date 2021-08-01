import React from 'react'
import NavBar from './NavBar'
import shop from '../img/shop.jpg'
import '../css/Shop.css'
import Footer from './Footer'

export default function Shop() {
    return (
        <div>
            <NavBar/>
            <div className="imgContainer">
                <img src={shop} alt="shop img"></img>
            </div>
            <Footer/>
        </div>
    )
}
