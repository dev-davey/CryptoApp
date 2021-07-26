import React from 'react'
import NavBar from './NavBar'
import '../css/News.css'

export default function News() {

   
    return (
        <div>
            <NavBar/>
            <div class="widgetContainer">
                 <iframe src="https://widgetscdn.cryptomood.com/sentiment-news?theme=light&direction=column&size=large"></iframe>
            </div>  
           </div>
    )}
