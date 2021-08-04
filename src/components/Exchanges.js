import React, { Component } from 'react'
import Nav from './NavBar';
import ExchangeTable from './ExchangeTable';
import '../css/Exchanges.css'
import Footer from './Footer';


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
            <div className="container">
                <div className="heading">
                    <title><h1>Top Trusted CryptoCurrency Exchanges</h1></title>
                </div>
                <div className="scrolling">
                {this.state.data? (
                    
                        <ExchangeTable 
                        data={this.state.data}
                        /> 
                        
                ): (<div className="loading"><p>Loading...</p></div>)}   

                </div> 
                <Footer/>
            </div>
            </div>
            
        )
    }
}

