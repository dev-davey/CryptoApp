import React, { Component } from 'react'
import Nav from './NavBar';
import ExchangeTable from './ExchangeTable';
import '../css/Exchanges.css'


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
            <div className="container">
                <Nav/>
                <div className="heading">
                    <h1>List of Top Trusted CryptoCurrency Exchanges</h1>
                </div>
                <div className="scroll">
                {this.state.data? (
                    
                        <ExchangeTable 
                        data={this.state.data}
                        /> 
                        
                ): (<div></div>)}   

                </div> 
            </div>
            
        )
    }
}

