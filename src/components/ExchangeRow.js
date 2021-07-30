import React from 'react'
import '../css/ExchangeRow.css'

export default function ExchangeRow(props) {
    return (

        <div className="container">
            <div className="list-items">
                <div className="twoItems">
                        <p>{props.rank}</p>
                        <img className="logo-img" src={props.image} alt='img logo'></img>
                </div>
                <div className="individuals">
                    <p>{props.name}</p>
                </div>
                <div className="rankYear">
                <p>{props.trust}</p>
                </div>
                <div className="individualUrl">
                <a>{props.url}</a> 
                </div>
                

                
                <div className="year">
                <p>{props.year}</p>
                </div>            
                <div className="individuals">
                <p>{`${Math.floor(props.volume)} BTC`}</p> 
                </div>    
                 
                
            </div>
        </div>
         
    
    )
}
