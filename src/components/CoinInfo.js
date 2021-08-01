import React, { Component } from 'react'
import NavBar from './NavBar'
import '../css/CoinInfo.css'
import Chart from './Chart.js';
import Description from './Description';
import Footer from './Footer';


export default class CoinInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: '',
            coinData:'',
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

    

    chartCall = (days) => {
        fetch(`https://api.coingecko.com/api/v3/coins/${this.props.match.params.id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then(response => response.json())
        .then(data => {console.log(data, 'marketchart')
          this.setState({chartData: data})
        //   this.setState({dailyData: this.state.coinData[0]}) 
        //   console.log(this.state.dailyData)
        //this.chartInfo()
        })
        
        .catch(error => console.log(error.message))
      }

      coinCall = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${this.props.match.params.id}?tickers=false&market_data=true`)
        .then(response => 
            response.json()
        )
        .then(resData => {console.log(resData)
          this.setState({coinData: resData})
          console.log(resData)
        })
        .catch(err => { 
            this.setState({errorMessage: err.message});
          })

      }

    
   
       componentDidMount(){
           this.chartCall(30)
           this.coinCall()
       } 




    render() {
        return (
            <div>
                <NavBar/>
                <div className="coinHeader">
                    <div className="leftSide">
                        <img src={this.state?.coinData?.image?.small} alt="coinLogo" />
                        <div className="leftNames">
                            <p>{this.state?.coinData?.name}</p>
                            <p>{`Rank #${this.state?.coinData?.coingecko_rank}`}</p>
                        </div>
                    </div>
                    <div className="rightSide">
                    <div className="rightSections">
                        <p>Market Cap</p>
                        <p>{this.convertToInternationalCurrencySystem(this.state?.coinData?.market_data?.market_cap?.usd)}</p>
                        </div>
                        <div className="rightSections">
                        <p>Current Price</p>
                        <p>{`$${this.convertToInternationalCurrencySystem(this.state?.coinData?.market_data?.current_price?.usd)}`}</p>
                        </div>
                        <div className="rightSections">
                        <p>All Time High</p>
                        <p>{`$${this.convertToInternationalCurrencySystem(this?.state?.coinData?.market_data?.ath?.usd)}`}</p>
                        </div>
                        <div className="rightSections">
                        <p>24h Change</p>
                        <p>{'%' + this?.state?.coinData?.market_data?.price_change_percentage_24h.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button onClick={() => this.chartCall(7)}>7d</button>
                    <button onClick={() => this.chartCall(30)}>30d</button>
                    <button onClick={() => this.chartCall(365)}>365d</button>
                    <button onClick={() => this.chartCall('max')}>Max</button>
                </div>
                <Chart coinData={this.state.chartData}/>
                <div className="coinDescription">
                    <Description 
                    coin={this.state?.coinData?.name}
                    description={this?.state?.coinData?.description?.es} 
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}