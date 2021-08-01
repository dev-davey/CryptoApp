import React from 'react'
import '../css/Header.css'




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

     

export default function Header(props) {

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

    let change = props?.data[0]?.price_change_percentage_24h
        let color = '';
        if (change <= 0){
             color = 'red'
        }
        else{
            color = 'green'
        }
   
    return (
        <div className="headerContainer">
            <div className="leftSide">
                <p>Top CryptoCurrencies By Market Cap</p>
            </div>
            <div className="rightSide">
                <img className="rotate" src={props?.data[0]?.image} alt="" />
                <div className="leaderInfo">
                    <p>Leader</p>
                    <p>{props?.data[0]?.name}</p>
                    <p className={color} >{`${formatter.format(change)}%`}</p>
                    <p className="price">{'$' + convertToInternationalCurrencySystem(props?.data[0]?.market_cap)}</p>
                </div>
            </div>
        </div>
    )
}
