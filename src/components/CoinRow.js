import React from 'react'
import '../css/coinRow.css'

export default function CoinRow(props) {

    return (
        <div className="container">
            <div className="list-items">
            <div className="individuals">
            <img className="logo-img" src={props.imageLocation}></img>
            </div>
            <div className="individuals">
            <p>{props.name}</p>
            </div>
            <div className="individuals">
            <p>{props.rank}</p>
            </div>
            <div className="individuals">
            <p>{props.marketCap.slice(0, props.marketCap.indexOf('.'))}</p>
            </div>
            <div className="individuals">
            <p>{props.price.slice(0, props.price.indexOf('.') + 3)}</p> 
            </div>    
            <div className="individuals">
            <p>{props.change.slice(0, props.change.indexOf('.') + 3)}</p> 
            </div>    
            </div>
        </div>
    )
}
