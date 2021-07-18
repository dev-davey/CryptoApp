import React from 'react'
import '../css/stickyHeader.css'

export default function StickyHeader() {
    return (
    <div className="stickyTop">
        <div className="flex-container">
            <div className="labels">
                <h3>Rank</h3>
            </div>
            <div className="labels">
                <h3>Crypto</h3>
            </div>
            <div className="labels">
                <h3>Price</h3>
            </div>
            <div className="labels">
                <h3>Market Cap</h3>
            </div>
            <div className="labels">
                <h3>24hr Change</h3>
            </div>
            <div className="labels">
                <h3>7d Change</h3>
            </div>
            <div className="labels">
                <h3>24hr Volume</h3>
            </div>
            <div className="labels">
                <h3>Supply</h3>
            </div>
        </div>
        </div>
    )
}
