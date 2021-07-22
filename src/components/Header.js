import React from 'react'
import App  from '../App'

export default function Header(props) {
    return (
        <div className="headerContainer">
            <div className="leftSide">
                <h2>Top CryptoCurrencies By Market Cap</h2>
            </div>
            <div className="rightSide">
                <h5>{props?.data[0]?.currency}</h5>
                {/* <img src={props?.data[0]?.logo_url} alt="" /> */}
                <h5>{props.data[0].market_cap}</h5>
                <h5>{props.data[0].name}</h5>
                <h5></h5>
            </div>
            
        </div>
    )
}
