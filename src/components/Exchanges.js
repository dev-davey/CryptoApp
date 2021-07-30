import React, { Component } from 'react'
import Nav from './NavBar';
import ExchangeList from './ExchangeList'
import StickyHeader from './StickyHeader'
import '../css/ExchangeComponent.css'

export default class Exchanges extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: ''
        }
      }
      
      exchangeCall = () => {
          fetch('https://api.coingecko.com/api/v3/exchanges?per_page=50')
          .then(response => response.json())
          .then(data => {console.log(data)
            this.setState({data: data})
        })
      }

      componentDidMount(){
          this.exchangeCall()
      }
        
    

    render() {
        return (
            <div>
                <Nav/>
                <h1>List of Top Trusted CryptoCurrency Exchanges</h1>
                
                {this.state.data? (
                    <div className="overFlow">
                    <div className="flex-container">
                    <div className="labels first">
                        <p>Rank</p>
                    </div>
                    <div className="labels">
                        <p>Exchange</p>
                    </div>
                    <div className="labels trust">
                        <p>Trust Rank</p>
                    </div>
                    <div className="labels">
                        <p>Website</p>
                    </div>
                    <div className="labels year">
                        <p>Year Started</p>
                    </div>
                    <div className="labels">
                        <p>24h Volume</p>
                    </div>
                </div>
                        <ExchangeList 
                        data={this.state.data}
                        /> 
                    </div>
                ): (<div></div>)}    
            </div>
        )
    }
}

