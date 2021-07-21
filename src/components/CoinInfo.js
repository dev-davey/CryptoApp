import React, { Component } from 'react'
import NavBar from './NavBar'
import '../css/CoinInfo.css'

export default class CoinInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            coinData: '',
            dailyData:'',
            dayOne: '1d'
        }
      }

    convertToInternationalCurrencySystem = (labelValue) => {

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


    nomicsCall = () => {
        fetch(`https://api.nomics.com/v1/currencies/ticker?key=3d4688a133b735636eedb0cb329a8bcbcbf52de6&ids=${this.props.match.params.id}&interval=1d,7d,30d&convert=USD`)
        .then(response => response.json())
        .then(data => {console.log(data)
          this.setState({coinData: data})
          this.setState({dailyData: this.state.coinData[0]}) 
          console.log(this.state.dailyData)
        })
        
        .catch(error => console.log(error.message))
      }
   
       componentDidMount(){
           this.nomicsCall()
       } 


    render() {
        return (
            <div>
                <NavBar/>
                <div className="coinHeader">
                    <div className="leftSide">
                        <img src={this.state?.coinData[0]?.logo_url} alt="" />
                        <div className="leftNames">
                            <h2>{this.state?.coinData[0]?.name}</h2>
                            <h2>{`$${this.state?.coinData[0]?.currency}`}</h2>
                        </div>
                    </div>
                    <div className="rightSide">
                    <div className="rightSections">
                        <h5>Market Cap</h5>
                        <h5>{this.convertToInternationalCurrencySystem(this.state?.coinData[0]?.market_cap)}</h5>
                        </div>
                        <div className="rightSections">
                        <h5>Current Price</h5>
                        <h5>{`$${this.convertToInternationalCurrencySystem(this.state?.coinData[0]?.price)}`}</h5>
                        </div>
                        <div className="rightSections">
                        <h5>All Time High</h5>
                        <h5>{`$${this.convertToInternationalCurrencySystem(this.state?.coinData[0]?.high)}`}</h5>
                        </div>
                        <div className="rightSections">
                        <h5>24h Change</h5>
                        <h5>{this.state?.dailyData['1d']?.price_change_pct}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
