
import NavBar from './NavBar'
import '../css/News.css'
import React, { Component } from 'react'
import Footer from './Footer'

export default class News extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <iframe title="Crypto News" width="100%" scrolling="yes" allowtransparency="true" frameBorder="0" src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;font_family=sans&amp;header_bg_color=30343B&amp;header_text_color=FFFFFF&amp;link_color=0091C2&amp;news_feed=recent&amp;posts_limit=10&amp;text_color=333333&amp;title=Latest%20News" height="350px"></iframe>
                <Footer/>
            </div>
        )
    }
}

