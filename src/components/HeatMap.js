import React from 'react'
import NavBar from './NavBar'
import '../css/HeatMaps.css'

export default function HeatMap() {
    return (
        <div>
            <NavBar/>
            <div class="iframesContainer">
                <div className="individualMaps">
                <iframe src="https://bitgur.com/widgets/map/minute15/top100" width="100%" height="500" scrolling="no" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    )
}
