import React, { useState } from 'react'
import '../css/coinRow.css'


export default function CoinRow(props) {
    
//changing colors based on positive or negative percentage changes
    let change = props.change
        let color = '';
        if (change <= 0){
             color = 'red'
        }
        else{
            color = 'green'
        }

    let weekChange = props.weekChange
        let weeklyColor
        if (weekChange <= 0){
         weeklyColor = 'red'
        }
        else{
            weeklyColor = 'green'
        }


    function convertToInternationalCurrencySystem (labelValue) {

        // Nine Zeroes for Billions
        if(labelValue > .01){
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue)).toFixed(2);
    }
        if(labelValue < .01 && labelValue > .001){
            return Math.abs(Number(labelValue)).toFixed(4)
        }
        else{
            return labelValue
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,      
        maximumFractionDigits: 2,
     });

    return (
        <div className="container">
            <div className="list-items">
                <div className="individuals twoItems">
                <p>{props.rank}</p>
                <img className="logo-img" src={props.imageLocation} alt='img logo'></img>
                </div>

                <div className="individuals">
                <p>{props.name}</p>
                </div>

                <div className="individuals">
                <p>{'$' + convertToInternationalCurrencySystem(props.price)}</p>
                </div>

                <div className="individuals">
                <p>{'$' + convertToInternationalCurrencySystem(props.marketCap)}</p> 
                </div>    

                <div className="individuals">
                <p className={color}>
                {`${formatter.format(change * 100)}%`}</p> 
                </div>

                <div className="individuals">
                <p className={weeklyColor}>
                {`${formatter.format(props.weekChange * 100)}%`}
                </p> 
                </div>    

                <div className="individuals">
                <p>{convertToInternationalCurrencySystem(props.volume.slice(0, props.volume.indexOf('.') + 3))}</p>  
                </div>
                <div className="individuals supply">
                <p>{convertToInternationalCurrencySystem(props.circulatingSupply)}</p>
                <p>{props.symbol}</p>  
                </div>
        </div>        
        </div>
    )
}
